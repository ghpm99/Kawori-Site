import authorization from "../../../security/authorization";
import { getSession } from 'next-auth/client';

export default async function handler(req, res) {

    const session = await getSession({ req });

    if (!session) {
        res.status(401).json({ status: "Unauthorized" });
        return;
    }

    if (req.method == "GET") {

        const urlUser = process.env.API_SPRING_URL + "/user/" + session.user.id;

        const resBack = await fetch(urlUser, {
            method: "GET",
            headers: authorization()
        });

        const data = await resBack.json();

        res.status(resBack.status).json(data);

    }

}