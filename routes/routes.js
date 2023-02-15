const todoRouter = require("./todos.route");

const basePath = "/api/v1";

module.exports = (app) => {
  app.use(`${basePath}/todos`, todoRouter);
};
