import { db } from "../database/database.js";

export async function home ( req, res ) {
    const { userId } = res.locals.body;

    const sumViwers = await db.query(`SELECT SUM(viwers) AS "visitCount" FROM viwers WHERE "userId" = $1;`,[userId]);
    const userInfo = await db.query(`SELECT users.id, users.name FROM users WHERE users.id = $1;`, [userId]);
    const urls = await db.query(`SELECT urls.id, urls."shortUrl", urls.url, viwers.viwers as "visitCount" FROM urls JOIN viwers ON urls.id = viwers."urlId" WHERE urls."userId" = $1`, [userId]);

    const user = {
        id: userInfo.rows[0].id,
        name: userInfo.rows[0].name,
        visitCount: sumViwers.rows[0].visitCount,
        shortenedUrls: urls.rows
    }

    return res.status(200).send(user);
}