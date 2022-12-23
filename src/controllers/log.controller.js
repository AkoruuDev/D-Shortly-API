import { db } from "../database/database.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function signIn ( req, res ) {
    const { email } = res.locals.body;
    const token = uuid();

    try {
        const userId = await db.query(`
            SELECT id
            FROM users
            WHERE email = $1`,
        [email]);
        const user = await db.query(`
            INSERT INTO
            sessions ("userId", token)
            VALUES ( $1, $2 )`,
        [userId.rows[0].id, token]);

        res.status(200).send({ token });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export async function signUp ( req, res ) {
    const {name, email, password, confirmPassword} = res.locals.body;

    const hashPassword = bcrypt.hashSync(password, 10);

    try {
        await db.query('INSERT INTO users ( name, email, password ) VALUES ( $1, $2, $3 );', [name, email, hashPassword]);

        return res.status(201).send('User regitred successfully');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

export async function logoff ( req, res ) {
    const { token } = res.locals.headers;

    try {
        await db.query(`DELETE FROM sessions WHERE token = $1`, [token]);
        return res.status(200).send("Logout successfully");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};