import { nanoid } from "nanoid";
import { db } from "../database/database.js";

export async function shorten( req, res ) {
    const { url, userId } = res.locals.body;
    const short = nanoid(10);
    
    try {
        await db.query(`INSERT INTO urls ("userId", url, cut) VALUES ($1, $2, $3);`, [userId, url, short]);

        return res.status(201).send({ shortUrl: short });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

export async function getId( req, res ) {
    const {} = req.body;

    try {
        return res.status(201).send({ shortUrl: short });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

export async function shortUrl( req, res ) {
    const {} = req.body;

    try {
        return res.status(201).send({ shortUrl: short });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

export async function deleteId( req, res ) {
    const {} = req.body;

    try {
        return res.status(201).send({ shortUrl: short });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};