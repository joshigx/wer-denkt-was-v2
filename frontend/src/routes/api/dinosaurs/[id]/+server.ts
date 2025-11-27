import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types.d.ts";
import { _getData } from "../+server.ts";


type Dinosaur = {
  name: string;
  description: string;

}


/**
 * Handles GET requests for retrieving a dinosaur by its ID.
 *
 * @param {Object} context - The request context object.
 * @param {Object} context.params - The route parameters.
 * @param {string} context.params.id - The ID of the dinosaur to retrieve.
 * @returns {Response} - A JSON response containing the dinosaur data if found,
 * or an error message with a 404 status if not found.
 */
export const GET: RequestHandler = async ({ params }) => {
  /**
   * Finds a dinosaur object from the data array that matches the given ID.
   * The comparison is case-insensitive and matches the `name` property of the dinosaur.
   *
   * @param item - An object representing a dinosaur, expected to have a `name` property.
   * @returns The dinosaur object if a match is found, otherwise `undefined`.
   */

  const data = await _getData();


  const dinosaur = data.find((item: Dinosaur) => {
    return item.name.toLowerCase() === params.id.toLowerCase();
  });

  if (dinosaur) {
    return json(dinosaur);
  }

  return json({ error: "Not found" }, { status: 404 });
};
