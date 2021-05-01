import axios from "axios";

export enum HTTPMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

/**
 * Send a request to the sever API with version v0
 * @param method HTTPMethod to use (GET, POST, PUT, DELETE)
 * @param url URL after /api/v0 with query parameters
 * @param body body of the request (optional)
 * @returns the response data
 */
export async function makeRequest<ResponseSchema = any>(
  method: HTTPMethods,
  url: string,
  body: object = {}
): Promise<ResponseSchema> {
  const headers: any = {};
  
  
  

  const response = await axios.request<
    { status: "ko"; message: string } | { status: "ok"; data: ResponseSchema }
  >({
    method: method,
    url: import.meta.env.VITE_API_ENDPOINT + url,
    data: body,
    headers,
  });

  if (response.data.status === "ko") {
    throw new Error(response.data.message);
  }

  return response.data.data;
}
