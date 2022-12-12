// import useDB from "../../database.js";
// import { ObjectId } from "mongodb";

// export default async function editCheese(request, response) {
//   const { collection, client } = await useDB("cheeses");
//   const id = request.params.id;
//   const updates = request.body;

//   if (ObjectId.isValid(id)) {
//     const result = await collection.findOneAndUpdate(
//       { _id: ObjectId(id) },
//       { $set: updates }
//     );
//     response.status(200);
//     response.send(result.value);
//     client.close();
//   } else {
//     response.status(400);
//     response.send("Invalid ID");
//     client.close();
//   }
// }
