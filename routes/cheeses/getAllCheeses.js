import useDB from "../../database.js";
import { ObjectId } from "mongodb";

export default async function getAllCheeses(request, response) {
  const { collection, client } = await useDB("cheeses");

  const getItem = async (itemID) => {
    try {
      return await collection.find({ _id: ObjectId(itemID) }).toArray();
    } catch (error) {
      return null;
    }
  };

  if (request.params.id) {
    const itemID = request.params.id;
    const item = await getItem(itemID);

    if (item !== null) {
      response.json(item);
    } else {
      response.status(404).json({ message: "Cheese not found" });
    }
  } else {
    const items = await collection.find().toArray();
    response.json(items);
  }

  // response.json({ message: "getallcheeses" });
  // response.end();
}
