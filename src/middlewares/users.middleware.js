import { db } from "../database/database.js";
import { authSchema } from "../tools/usersValidate.js";

export async function homeValidate ( req, res, next ) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).send('The authorization is required');
    }

    const { error } = authSchema.validate({ authorization });
    if (error) {
        return res.status(422).send(error.details.map(e => e.message));
    }

    const token = authorization.replace('Bearer ', '');
    const validToken = await db.query(`SELECT * FROM sessions WHERE token = $1;`, [token]);
    if (!validToken.rows[0]?.token) {
        return res.status(401).send('This user is invalid');
    }
    
    res.locals.body = {userId: validToken.rows[0].userId};
    next();
}