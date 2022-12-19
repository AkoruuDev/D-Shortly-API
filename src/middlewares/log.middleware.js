import { db } from "../database/database.js";
import { signInSchema, signUpSchema } from "../tools/logValidate.js";

export async function signInValidate ( req, res, next ) {
    const { email, password } = req.body;

    const { error } = signInSchema.validate({ email, password });
    if (error) {
        return res.status(422).send(error.details.map(e => e.message));
    }
    /* 
    const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if ( user.rows.length === 0 ) {
        return res.status(401).send("This user doesn't exists");
    }
    const pass = bcrypt.compareSync(user.rows.password, password);
    if ( !pass ) {
        return res.status(401).send("Password incorrect");
    }
    */    
    res.locals.body = { email, password };
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