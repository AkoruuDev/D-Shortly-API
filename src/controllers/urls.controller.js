export async function shorten( req, res ) {
    const { url, userId } = res.locals.body;

    return res.status(201).send({ userId, url });
};

export async function getId( req, res ) {
    const {} = req.body;

    return res.status(201).send();
};

export async function shortUrl( req, res ) {
    const {} = req.body;

    return res.status(201).send();
};

export async function deleteId( req, res ) {
    const {} = req.body;

    return res.status(201).send();
};