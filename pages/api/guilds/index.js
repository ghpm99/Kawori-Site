import { getSession } from "next-auth/client";
import authorization from "../../../security/authorization";

export default async function handler(req, res) {

    const session = await getSession({ req });

    if (!session) {
        res.status(401).json({ status: "Unauthorized" });
        return;
    }

    if (req.method == "GET") {

        const urlStatus = process.env.API_SPRING_URL + "/guilds/" + session.user.id;

        const resBack = await fetch(urlStatus, {
            method: "GET",
            headers: authorization()
        });

        const data = await resBack.json();

        res.status(resBack.status).json(data);

    }

}