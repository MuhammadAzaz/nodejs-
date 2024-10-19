const Router = require("express").Router();
import * as userController from "../controllers/user.controller";
import { validate } from "../middlewares/validator";
import { createUserSchema } from "../constants/schemaValidations";

Router.get("/getUser", userController.getUser);

Router.get("/createUser", validate(createUserSchema), userController.getUser);

module.exports = Router;
