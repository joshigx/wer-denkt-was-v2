import { json } from "@sveltejs/kit";
import data from "../data.json" with { type: "json" };

//liefer als json datei den inhalt von data.json aus dem darüberleigenden order wieder.
//wenn man auf http://127.0.0.1:5173/api/dinosaurs geht, sieht eine textlsite im json format aller dinosaurs




/**
 * Fetches dinosaur data from a local server.
 *
 * @returns A promise that resolves to the JSON data containing dinosaur information.
 * @throws Will throw an error if the fetch request fails or the response cannot be parsed as JSON.
 */
export async function _getData() {
  const response= await fetch("http://localhost:8000/data/dinosaurs.json");
  const jsonData = await response.json();
  return jsonData;
}

/**
 * Handles the GET request for the `/api/dinosaurs` endpoint.
 * 
 * @returns A JSON response containing the data retrieved by the `getData` function.
 */
export async function GET() {
  return json(await _getData());
}
