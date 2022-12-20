// tools
import express from "express";
import dotenv from "dotenv";

// route path
import log from "./routes/log.routes.js";
import ranking from "./routes/ranking.routes.js";
import url from "./routes/urls.routes.js";
import user from "./routes/user.routes.js";

// config
dotenv.config();
const port = process.env.LOCAL_PORT || 5000;
const server = express();
server.use(express.json());

// routes
server.use(log);
server.use(ranking)
server.use(url);
server.use(user);

// listen
server.listen(port, () => {
    console.log(`Server is running on ${port}`);
});