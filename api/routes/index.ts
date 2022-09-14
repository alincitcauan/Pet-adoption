const express = require("express");
const router = express.Router();

let routes = (app: { use: (arg0: string, arg1: any) => any; }) => {

  router.get("/my-profile");
  router.get("/home");
  router.get("/");

  return app.use("/", router);
};

module.exports = routes;