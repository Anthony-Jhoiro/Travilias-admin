import axios from "axios";


export enum HTTPMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"

}

/**
 * Send a request to the sever API with version v0
 * @param method HTTPMethod to use (GET, POST, PUT, DELETE)
 * @param url URL after /api/v0 with query parameters
 * @param body body of the request (optional)
 * @returns the response data
 */
export async function makeRequest<ResponseSchema = any>(method: HTTPMethods, url: string, body: object = {}): Promise<ResponseSchema> {
  const response = await axios.request<{status: "ko", message: string}|{status: "ok", data: ResponseSchema}>({
    method: method,
    url: "http://127.0.0.1:8080/api/v0" + url, // TODO : API endpoint in environment
    data: body
  });

  if (response.data.status === "ko") {
    throw new Error(response.data.message);
  }

  return response.data.data;
}