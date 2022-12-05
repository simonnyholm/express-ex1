import express from "express";
import oste from "./routes/oste.js";

const app = express();

app.use(express.static("./public"));

app.get("/", function (request, response) {
  response.send("Hej ");
  response.end();
});

oste(app);

// app.get("/hej/:navn", function (request, response) {
//   response.setHeader("content-type", "text/html");
//   response.send(
//     "<link rel='stylesheet' href='/style.css'>" +
//       "<h1>Hej " +
//       request.params.navn +
//       "</h1>"
//   );

//   response.end();
// });

app.listen(3102, function () {
  console.log("app listen on port 3102");
});
