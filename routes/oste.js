import authorization from "../middleware/auth.js";

export default function oste(app) {
  // app.get("/oste", authorization, function (request, response) {
  //   response.json([
  //     {
  //       id: 1,
  //       name: "danbo",
  //     },
  //     {
  //       id: 2,
  //       name: "brie",
  //     },
  //   ]);
  //   response.end();
  // });

  app.all("/oste", authorization, function (request, response) {
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
  app.all("/customers", authorization, function (request, response) {
    response.json([
      {
        id: 1,
        name: "Dan Boesen",
      },
      {
        id: 2,
        name: "Brian Brie",
      },
    ]);
    response.end();
  });
}
