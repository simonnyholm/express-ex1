export default function hej(app) {
  app.get("/hej/:navn", function (request, response) {
    response.setHeader("content-type", "text/html");
    response.send(
      "<link rel='stylesheet' href='/style.css'>" +
        "<h1>Hej " +
        request.params.navn +
        "</h1>"
    );
    s;
    response.end();
  });
}
