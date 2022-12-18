export async function signInValidate ( req, res, next ) {
    const { email, password } = req.body;

    /* 
    const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if ( user.rows.length === 0 ) {
        return res.status(401).send("This user doesn't exists");
    }
    const pass = bcrypt.compareSync(user.password, password);
    if ( !pass ) {
        return res.status(401).send("Password incorrect");
    }
    */
    
    res.locals.body = { email, password };
    next();
}