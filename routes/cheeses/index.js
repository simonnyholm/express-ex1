import getAllCheeses from "./getAllCheeses.js";
import createCheese from "./createCheese.js";
import auth from "../../middleware/auth.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const extension = file.originalname.split(".").pop();
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
  },
});

const upload = multer({ storage: storage });

export default function cheeses(app) {
  app
    .route("/cheeses")
    .get(getAllCheeses)
    .all(auth)
    .post(upload.single("image"), createCheese);
}
