import { Router } from "express";
import { logoff, signIn, signUp } from "../controllers/log.controller.js";
import { logoffValidate, signInValidate, signUpValidate } from "../middlewares/log.middleware.js";

const route = Router();

route.post('/signup', signUpValidate , signUp);
route.post('/signin', signInValidate, signIn);

route.delete('/signout', logoffValidate, logoff);

export default route;