const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const asyncError = require("./errors.Middleware");
const indexRoutes = require("../routes/routes");

require("../config/database")();

module.exports = (app) => {
  app.use(morgan("dev"));
  app.use(cors());
  app.use(express.json());
  indexRoutes(app);

  app.use(asyncError);
};
