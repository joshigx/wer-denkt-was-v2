import { Hono } from "hono";
import { View } from "./views/View.class.ts";
import { Test } from "../testing/test.ts";
import data from "../data/data.json" with { type: "json" };

const app = new Hono();

// Any HTTP methods
app.all("/", (c) => {
  //c.status(404)
  return c.json(View.getRoomOverviewJSON());
});

app.get("/data/dinosaurs.json", (c) => {
  return c.json(data);
});

Test.createUser();
Deno.serve(app.fetch);
