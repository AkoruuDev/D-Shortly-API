import { db } from "../database/database.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function signIn ( req, res ) {
    const { email, password } = res.locals.body;
    const token = uuid();
    const user = {
        rows: {
            userId: 1,
            token
        }
    }

   /*  const userId = await db.query(`
        SELECT id
        FROM users
        WHERE email = $1`,
        [email]);
    const user = await db.query(`
        INSERT INTO
        sessions ("userId", token)
        VALUES ( $1, $2 )`,
        [userId.rows, token]); */

    console.log({ token: user.rows.token });
    res.status(200).send({ token: user.rows.token });
};

export async function signUp ( req, res ) {
    const {name, email, password, confirmPassword} = req.body;
    
    // JOI validate
    // return res.status(422).send(error.details.map(e => e.message));

    // if (userExists.rows.length > 0) { return res.status(409).send('This user already exists'); };


    const hashPassword = bcrypt.hashSync(password, 10);

    // await db.query('INSERT INTO users ( name, email, password ) VALUES ( $1, $2, $3 );', [name, email, hashPassword]);

    return res.status(201).send('User regitred successfully')
};