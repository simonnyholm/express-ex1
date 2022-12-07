import authorization from "../middleware/auth.js";

export default function oste(app) {
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
        orders: [
          {
            id: 1,
            name: "danbo",
          },
        ],
      },
      {
        id: 2,
        name: "Brian Brie",
        orders: [
          {
            id: 2,
            name: "danbo",
          },
          {
            id: 3,
            name: "brie",
          },
        ],
      },
    ]);
    response.end();
  });
  app.all(
    "/customers/:id/orders/:id",
    authorization,
    function (request, response) {
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
    }
  );
}
