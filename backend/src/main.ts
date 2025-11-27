//run with deno task start
import { Hono } from "hono";
import data from "./data/data.json" with { type: "json" };


const app = new Hono();

const path: string = "./src/views/index.html";
const test: string = await Deno.readTextFile(path)


// Any HTTP methods
app.get("/", (c) => {
  //c.status(404)
  return c.html(test);
});



app.get("/data/dinosaurs.json", (c) => {
  return c.json(data);
});



Deno.serve(app.fetch);
