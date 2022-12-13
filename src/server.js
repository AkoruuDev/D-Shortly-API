// tools
import express from "express";
import dotenv from "dotenv";

// config
dotenv.config();
const port = process.env.LOCAL_PORT || 5000;
const server = express();
server.use(express.json());

// routes


// listen
server.listen(port, () => {
    console.log(`Server is running on ${port}`);
});