import { ObjectId } from "mongodb";
import useDB from "../../database.js";

export default async function deleteCheese(request, response) {
  const { collection, client } = await useDB("cheeses");
  const id = request.params.id;
  if (id) {
    console.log(id);
    collection.deleteOne({ _id: ObjectId(id) });
    response.json({ message: "One cheese is deleted" });
  }

  response.end();
}
