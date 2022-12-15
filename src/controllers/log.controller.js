import { db } from "../database/database.js";
import bcrypt from "bcrypt";
// import { v4 as uuid } from "uuid";

export async function signIn ( req, res ) {
    const { email, password } = req.body;
    const token = '' //uuid();

    /* 
    const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if ( user.rows.length === 0 ) {
        return res.status(401).send("This user doesn't exists");
    }
    const pass = bcrypt.compareSync(user.password, password);
    if ( pass ) {
        return res.status(401).send("Password incorrect");
    }
    */

    console.log({ email, password });
    res.status(200).send({ token });
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