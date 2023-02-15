const express = require("express");
const todoController = require("../controller/controller");

const roomRouter = express.Router();

roomRouter.post("/", todoController.create);

roomRouter.get("/", todoController.findAll);

roomRouter.get("/:id", todoController.findById);

roomRouter.put("/:id", todoController.update);

roomRouter.delete("/:id", todoController.delete);

module.exports = roomRouter;
