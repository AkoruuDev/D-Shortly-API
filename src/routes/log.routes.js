import { Router } from "express";
import { signIn, signUp } from "../controllers/log.controller.js";
import { signInValidate } from "../middlewares/log.middleware.js";

const route = Router();

route.post('/signup', signUp);
route.post('/signin', signInValidate, signIn);

export default route;