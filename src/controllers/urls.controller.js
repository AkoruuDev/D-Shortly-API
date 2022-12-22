import { nanoid } from "nanoid";
import { db } from "../database/database.js";

export async function shorten( req, res ) {
    const { url, userId } = res.locals.body;
    const short = nanoid(10);
    
    try {
        await db.query(`INSERT INTO urls ("userId", url, "shortUrl") VALUES ($1, $2, $3);`, [userId, url, short]);

        return res.status(201).send({ shortUrl: short });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

export async function getId( req, res ) {
    const { url } = res.locals.body;
    
    return res.status(200).send(url)
};

export async function shortUrl( req, res ) {
    const { url } = res.locals.body;

    try {   
        const viwer = await db.query(`SELECT viwers FROM viwers WHERE "urlId" = $1;`, [url.id]);
        if (viwer.rows.length !== 0) {
            await db.query(`UPDATE viwers SET viwers = $1 WHERE "urlId" = $2;`, [viwer.rows[0].viwers + 1, url.id]);
        } else {
            await db.query(`INSERT INTO viwers ("urlId", viwers) VALUES ($1, $2);`, [url.id, 1]);
        }

        return res.status(200).send(url.url);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

export async function deleteId( req, res ) {
    const { id } = res.locals.body;
    
    try {
        await db.query(`DELETE FROM viwers WHERE "urlId" = $1`, [id]);
        await db.query(`DELETE FROM urls WHERE id = $1`, [id]);

        return res.status(204).send("Url deleted successfully");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};