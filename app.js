import express from "express";
import cheeses from "./routes/cheeses/index.js";

const app = express();

app.use(express.static("./public"));
app.use(express.json());

cheeses(app);

app.listen(3102, function () {
  console.log("app listen on port 3102");
});

// Connecting to the mongodb server
