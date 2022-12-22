import { Router } from "express";
import { home } from "../controllers/users.controller.js";
import { homeValidate } from "../middlewares/users.middleware.js";

const route = Router();

route.get('/users/me', homeValidate, home);

export default route;