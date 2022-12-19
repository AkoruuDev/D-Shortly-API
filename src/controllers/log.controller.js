import { db } from "../database/database.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { signInSchema } from "../tools/logValidate.js";

export async function signIn ( req, res ) {
    const { email, password } = res.locals.body;
    const token = uuid();
    const user = {
        rows: {
            userId: 1,
            token
        }
    }

    // Put TRY/CATCH
    /* const userId = await db.query(`
        SELECT id
        FROM users
        WHERE email = $1`,
        [email]);
    const user = await db.query(`
        INSERT INTO
        sessions ("userId", token)
        VALUES ( $1, $2 )`,
        [userId.rows.id, token]); */

    console.log({ token: user.rows.token });
    res.status(200).send({ token: user.rows.token });
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