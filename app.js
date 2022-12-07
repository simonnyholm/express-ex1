import express from "express";

import cheeses from "./routes/cheeses/index.js";

const app = express();

app.use(express.static("./public"));
cheeses(app);

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
