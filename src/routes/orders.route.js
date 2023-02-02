const Router = require("express").Router();

const {
  getAllOrders,
  getOrder,
  postOrder,
  putOrder,
} = require("../controllers/orders");

Router.get("/", getAllOrders);
Router.get("/:id", getOrder);
Router.post("/", postOrder);
Router.put("/:id", putOrder);

module.exports = Router;