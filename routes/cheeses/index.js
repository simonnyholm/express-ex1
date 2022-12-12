import getAllCheeses from "./getAllCheeses.js";
import createNewCheese from "./createNewCheese.js";
import auth from "../../middleware/auth.js";
import upload from "../../middleware/upload.js";
import deleteCheese from "./deleteCheese.js";
import updateCheese from "./updateCheese.js";

export default function cheeses(app) {
  app
    .route("/cheeses/:id?")
    .get(getAllCheeses)
    .all(auth)
    .post(upload.single("image"), createNewCheese)
    .patch(upload.single("image"), updateCheese)
    .delete(deleteCheese);
}
