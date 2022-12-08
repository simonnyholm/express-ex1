import useDB from "../../database";

export default async function getAllCheeses(request, response) {
  const { collection, client } = await useDB("cheeses");
  if (request.params.id) {
    //get single cheese
  } else {
    //get All cheeses
  }

  response.json({ message: "getallcheeses" });
  response.end();
}
