export default function createCheese(request, response) {
  console.log(request.file);
  console.log(request.body);

  response.json({ message: "CreateCheese" });
  response.end();
}
