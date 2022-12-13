import { Router } from "express";

const route = Router();

route.post('/urls/shorten', () => {});

route.get('/urls/:id', () => {});
route.get('/urls/open/:shortUrl', () => {});

route.delete('/urls/:id', () => {});

export default route;