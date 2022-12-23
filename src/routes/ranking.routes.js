import { Router } from "express";
import { ranking } from "../controllers/ranking.controller.js";

const route = Router();

route.get('/ranking', ranking);

export default route;