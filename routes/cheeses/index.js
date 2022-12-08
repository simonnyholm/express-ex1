import getAllCheeses from "./getAllCheeses.js";
import createCheese from "./createCheese.js";
import auth from "../../middleware/auth.js";
import upload from "../../middleware/upload.js";

export default function cheeses(app) {
  app
    .route("/cheeses")
    .get(getAllCheeses)
    .all(auth)
    .post(upload.single("image"), createCheese);
}
