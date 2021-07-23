import authorization from '../../../../security/authorization';
import { getSession } from 'next-auth/client';

export default async function handler(req, res) {

    const session = await getSession({ req });

    if (!session) {
        res.status(401).json({ status: "Unauthorized" });
        return;
    }

    if (req.method == "GET") {

        const urlAdventureFame = process.env.API_SPRING_URL + "/admin/v2/auto_role?id=" + session.user.id + "&page=" + req.headers.page + "&size=" + req.headers.size;

        const resBack = await fetch(urlAdventureFame, {
            method: "GET",
            headers: authorization()
        });

        const data = await resBack.json();

        res.status(resBack.status).json(data);

    }

}