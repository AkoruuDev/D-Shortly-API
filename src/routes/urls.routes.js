import { Router } from "express";
import { deleteId, getId, shorten, shortUrl } from "../controllers/urls.controller.js";
import { deleteIdValidate, getIdValidate, shortenValidate, shortUrlValidate } from "../middlewares/urls.middleware.js";

const route = Router();

route.post('/urls/shorten', shortenValidate, shorten);

route.get('/urls/:id', getIdValidate, getId);
route.get('/urls/open/:shortUrl', shortUrlValidate, shortUrl);

route.delete('/urls/:id', deleteIdValidate, deleteId);

export default route;