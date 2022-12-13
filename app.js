import express from "express";
import auth from "./routes/auth/index.js";
import cheeses from "./routes/cheeses/index.js";
import customers from "./routes/customers/index.js";

const app = express();

app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

cheeses(app);
customers(app);
auth(app);

app.listen(3102, function () {
  console.log("app listen on port 3102");
});

// Connecting to the mongodb server
