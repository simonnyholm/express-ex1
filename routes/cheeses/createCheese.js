import useDB from "../../database.js";

export default async function createCheese(request, response) {
  // console.log(request.file);
  // console.log(request.body);

  const isArray = Array.isArray(request.body);
  const { collection, client } = await useDB("cheeses");

  const singleItem = [Object.assign({}, request.body)];
  const data = isArray ? request.body : singleItem;

  try {
    if (isArray === false) {
      const result = await collection.insertOne(data[0]);
      response
        .status(201)
        .json({ message: "cheese created", cheese: result })
        .end();
      return;
    }
    const result = await collection.insertMany(data);
    response
      .status(201)
      .json({ message: "cheeses created", cheeses: result })
      .end();
  } catch (error) {
    response
      .status(500)
      .json({ message: "Something went wrong", error: error });
  }
  client.close();

  // response.status(201);

  // response.json({ message: "CreateCheese" });
  // response.end();
}
