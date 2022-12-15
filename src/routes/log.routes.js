import { Router } from "express";
import { signIn, signUp } from "../controllers/log.controller.js";

const route = Router();

route.post('/signup', signUp);
route.post('/signin', signIn);

export default route;