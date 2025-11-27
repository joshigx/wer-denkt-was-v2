/**
 * Loads data for the page by fetching a list of dinosaurs from the `/api/dinosaurs` endpoint.
 *
 * @param fetch - The `fetch` function provided by the framework to make HTTP requests.
 * @returns An object containing the fetched dinosaurs data.
 */
import type { PageLoad } from "./$types.d.ts";


export const load: PageLoad = async ({ fetch }) => {

  /**
   * Represents the response object returned from the fetch request to the `/api/dinosaurs` endpoint.
   * The `res` object contains information about the HTTP response, including status, headers, and body.
   */
  const res = await fetch(`/api/dinosaurs`);


  /**
   * Represents the parsed JSON response containing dinosaur data.
   * The structure of the data should be defined based on the expected API response.
   */
  const dinosaurs = await res.json();

  return { dinosaurs };
};