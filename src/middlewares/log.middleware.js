import { db } from "../database/database.js";
import { signInSchema, signUpSchema } from "../tools/logValidate.js";
import bcrypt from "bcrypt";
import { authorizationSchema } from "../tools/urlsValidate.js";

export async function signInValidate ( req, res, next ) {
    const { email, password } = req.body;

    const { error } = signInSchema.validate({ email, password });
    if (error) {
        return res.status(422).send(error.details.map(e => e.message));
    }
    
    const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if ( user.rows.length === 0 ) {
        return res.status(401).send("This user doesn't exists");
    }

    const pass = bcrypt.compareSync(password, user.rows[0].password);
    if ( !pass ) {
        return res.status(401).send("Password incorrect");
    }
      
    res.locals.body = { email };
    next();
};

export async function signUpValidate ( req, res, next ) {
    const {name, email, password, confirmPassword} = req.body;

    const { error } = signUpSchema.validate({name, email, password, confirmPassword});
    if (error) {
        return res.status(422).send(error.details.map(e => e.message));
    }

    const user = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
    if (user.rows.length !== 0) {
        return res.status(409).send('This user already exists');
    };

    res.locals.body = {name, email, password, confirmPassword};
    next();
};

export async function logoffValidate ( req, res, next ) {
    const {authorization} = req.headers;

    if (!authorization) {
        return res.status(401).send('The authorization is required');
    }

    const { error } = authorizationSchema.validate({ authorization });
    if (error) {
        return res.status(422).send(error.details.map(e => e.message));
    }

    const token = authorization.replace('Bearer ', '');
    const validToken = await db.query(`SELECT * FROM sessions WHERE token = $1;`, [token]);
    if (!validToken.rows[0]?.token) {
        return res.status(401).send('This user is invalid');
    }
    
    res.locals.headers = {token}
    next();
};