import { ControlType, Id, Image } from "../types";
import { HTTPMethods, makeRequest } from "./request";
import { store } from "../stores";

/**
 * Fetch the API to get images list and populate the store
 * @param limit number of result to fetch
 * @param page number of limit element to be skip
 * @param after date after wich we start fetching results
 * @returns the fetched image list
 */
export async function getImages(
  limit: number,
  page: number,
  after?: Date
): Promise<Image[]> {
  let query = "/image?";
  if (limit) query += `limit=${limit}&`;
  if (page) query += `page=${page}&`;
  if (after) query += `after=${after.getTime()}&`;

  const responseImages = await makeRequest<Image[]>(HTTPMethods.GET, query);

  const filteredImages = responseImages.map((i) => ({
    ...i,
    controlledAt: i.controlledAt ? new Date(i.controlledAt) : null,
    createdAt: new Date(i.createdAt),
  }));

  store.commit("addImages", filteredImages);

  return filteredImages;
}

/**
 * Send a request to the API to control an image and update the store
 * @param imageId image to control
 * @param controlType type of control
 * @returns the controlled image
 */
export async function controlImage(imageId: Id, controlType: ControlType) {
  const { image } = await makeRequest<{ image: Image }>(
    HTTPMethods.PUT,
    "/image/" + imageId,
    {
      controlType,
    }
  );

  if (image) {
    store.commit("updateImage", {
      ...image,
      controlledAt: image.controlledAt ? new Date(image.controlledAt) : null,
      createdAt: new Date(image.createdAt),
    });
  }
}
