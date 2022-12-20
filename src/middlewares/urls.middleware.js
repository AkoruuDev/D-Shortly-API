import { db } from "../database/database.js";
import { shortenSchema } from "../tools/urlsValidate.js";

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
        return res.status(401).send('This token is invalid');
    }

    res.locals.body = { url, userId: validToken.rows[0]?.userId };
    next();
};

export async function getIdValidate( req, res, next ) {
    const {} = req.body;

    return res.status(201).send();
    

    res.locals.body = {};
    next();
};

export async function shortUrlValidate( req, res, next ) {
    const {} = req.body;

    return res.status(201).send();
    

    res.locals.body = {};
    next();
};

export async function deleteIdValidate( req, res, next ) {
    const {} = req.body;

    return res.status(201).send();
    

    res.locals.body = {};
    next();
};