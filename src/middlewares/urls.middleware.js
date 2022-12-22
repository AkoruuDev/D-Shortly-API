import { db } from "../database/database.js";
import { idSchema, urlSchema, authSchema, shortenSchema } from "../tools/urlsValidate.js";

export async function shortenValidate( req, res, next ) {
    const { authorization } = req.headers;
    const { url } = req.body;

    if (!authorization) {
        return res.status(401).send('The authorization is required');
    }

    const { error } = shortenSchema.validate({ authorization, url });
    if (error) {
        return res.status(422).send(error.details.map(e => e.message));
    }

    const token = authorization.replace('Bearer ', '');
    const validToken = await db.query(`SELECT * FROM sessions WHERE token = $1;`, [token]);
    if (!validToken.rows[0]?.token) {
        return res.status(401).send('This user is invalid');
    }

    res.locals.body = { url, userId: validToken.rows[0]?.userId };
    next();
};

export async function getIdValidate( req, res, next ) {
    const { id } = req.params;

    const { error } = idSchema.validate({ id });
    if (error) {
        return res.status(422).send(error.details.map(e => e.message));
    }

    try {
        const url = await db.query(`SELECT id, "shortUrl", url FROM urls WHERE id = $1;`, [id]);
        if (url.rows.length === 0) {
            return res.status(404).send(`There isn't shorthen url for this id`);
        }

        res.locals.body = { url: url.rows[0] };
    } catch (error) {
        return res.status(500).send(error.message);
    }

    next();
};

export async function shortUrlValidate( req, res, next ) {
    const { shortUrl } = req.params;

    const { error } = urlSchema.validate({ url: shortUrl });
    if ( error ) {
        return res.status(422).send(error.details.map(e => e.message));
    }

    const url = await db.query(`SELECT id, url, "userId" FROM urls WHERE "shortUrl" = $1;`, [shortUrl]);
    if (url.rows.length === 0) {
        return res.status(404).send(`Url not found`);
    }
    
    res.locals.body = { url: url.rows[0] };
    next();
};

export async function deleteIdValidate( req, res, next ) {
    const { authorization } = req.headers;
    const { id } = req.params;
    
    if (!authorization) {
        return res.status(401).send('The authorization is required');
    }

    const { error } = authSchema.validate({ authorization, id });
    if (error) {
        return res.status(422).send(error.details.map(e => e.message));
    }

    const token = authorization.replace('Bearer ', '');
    const user = await db.query(`SELECT * FROM sessions WHERE token = $1;`, [token]);
    if (!user.rows[0]?.token) {
        return res.status(401).send('This user is invalid');
    }

    const url = await db.query(`SELECT * FROM urls WHERE id = $1;`, [id]);
    if (url.rows.length === 0) {
        return res.status(404).send(`Url not found`);
    }
    if (url.rows[0].userId !== user.rows[0].userId) {
        return res.status(401).send(`Url must belong to the user`);
    }

    res.locals.body = { id: url.rows[0].id };
    next();
};