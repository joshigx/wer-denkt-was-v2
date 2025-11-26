import { Hono } from "hono";
import { View } from "./backend/View.class.ts";
import { Test } from "./backend/testing/test.ts";

const app = new Hono();

const template: string = await Deno.readTextFile("./index.html");

// Any HTTP methods
app.all("/", (c) => {


  //c.status(404)
  return c.json(View.getRoomOverviewJSON());
});

// Any HTTP methods

app.get("/hello", (c) => {
  return c.redirect("/hello/dein_name_in_url_eingeben");
});

app.all("/hello/:name", (c) => {
  const name: string = c.req.param("name");
  const html = template.replace("{{name}}", name);
  //c.status(404)
  return c.html(html);
});


Test.createUser();
Deno.serve(app.fetch);
