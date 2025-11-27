import { Hono } from "hono";
import { View } from "./backend/View.class.ts";
import { Test } from "./backend/testing/test.ts";
import data from "./backend/data.json" with { type: "json" };

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
