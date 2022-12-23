import { db } from "../database/database.js";

export async function ranking ( req, res ) {
    try {
        const {rows} = await db.query(`SELECT users.id, users.name, COUNT(viwers."userId") AS "linksCount", SUM(viwers.viwers) AS "visitCount" FROM users JOIN viwers ON users.id = viwers."userId" GROUP BY viwers."userId", users.id, users.name ORDER BY "visitCount" DESC LIMIT 10;`);
        const rank = rows;

        return res.status(200).send(rank);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};