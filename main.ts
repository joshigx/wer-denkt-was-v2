import { Hono } from "hono";

const app = new Hono();

const template: string = await Deno.readTextFile("./index.html");

// Any HTTP methods
app.all("/", (c) => {

  //c.status(404)
  return c.text("Hallo");
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

Deno.serve(app.fetch);
