import { json } from "@sveltejs/kit";
import data from "../data.json" with { type: "json" };


//liefer als json datei den inhalt von data.json aus dem darüberleigenden order wieder.
//wenn man auf http://127.0.0.1:5173/api/dinosaurs geht, sieht eine textlsite im json format aller dinosaurs
/**
 * Handles GET requests to the `/api/dinosaurs` endpoint.
 *
 * @returns A JSON response containing the dinosaur data.
 */
export function GET() {
  return json(data);
}