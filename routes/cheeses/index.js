import getAllCheeses from "./getAllCheeses.js";
import createCheese from "./createCheese.js";
import auth from "../../middleware/auth.js";
import upload from "../../middleware/upload.js";
import deleteCheese from "./deleteCheese.js";
import editCheese from "./editCheese.js";

export default function cheeses(app) {
  app
    .route("/cheeses/:id")
    .get(getAllCheeses)
    .all(auth)
    .post(upload.single("image"), createCheese)
    .patch(editCheese)
    .delete(deleteCheese);
}
