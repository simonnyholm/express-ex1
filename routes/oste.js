import authorization from "../middleware/auth.js";

export default function oste(app) {
  app.get("/oste", authorization, function (request, response) {
    response.json([
      {
        id: 1,
        name: "danbo",
      },
      {
        id: 2,
        name: "brie",
      },
    ]);
    response.end();
  });
}
