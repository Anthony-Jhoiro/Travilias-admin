import { ControlType, Id, Image } from "../types";
import { HTTPMethods, makeRequest } from "./request";

/**
 * Fetch the API to get images list
 * @param limit number of result to fetch
 * @param page number of limit element to be skip
 * @param after date after wich we start fetching results
 * @returns the fetched image list
 */
export async function getImages(limit: number, page: number, after?: Date): Promise<Image[]> {
  let query = "/image?";
  if (limit) query += `limit=${limit}&`;
  if (page) query += `page=${after}&`;
  if (after) query += `limit=${after.getTime()}&`;

  const images = await makeRequest<Image[]>(HTTPMethods.GET, query);

  return images.map((i) => ({
    ...i,
    controlledAt: i.controlledAt ? new Date(i.controlledAt) : null,
    createdAt: new Date(i.createdAt),
  }));
}

/**
 * Send a request to the API to control an image
 * @param imageId image to control
 * @param controlType type of control
 * @returns the controlled image
 */
export async function controlImage(imageId: Id, controlType: ControlType): Promise<Image> {
  const { image } = await makeRequest<{image: Image}>(HTTPMethods.PUT, "/image/" + imageId, {
    controlType,
  });

  return {
    ...image,
    controlledAt: image.controlledAt ? new Date(image.controlledAt) : null,
    createdAt: new Date(image.createdAt),
  };
}
