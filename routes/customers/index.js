import createCustomer from "./createCustomer.js";

export default function customers(app) {
  app.route("/customers/:id?")
  .post(createCustomer);
}
