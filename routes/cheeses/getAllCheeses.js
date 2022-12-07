export default function getAllCheeses(request, response) {
  if (request.params.id) {
    //get single cheese
  } else {
    //get All cheeses
  }

  response.json({ message: "getallcheeses" });
  response.end();
}
