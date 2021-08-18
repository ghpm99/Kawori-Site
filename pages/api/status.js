import authorization from "../../security/authorization"

export default async function handler(req, res) {

    if (req.method == "GET") {

        const urlStatus = process.env.API_SPRING_URL + "/status";

        const resBack = await fetch(urlStatus, {
            method: "GET",
            headers: authorization()
        });

        const data = await resBack.json();

        res.status(resBack.status).json(data);

    }

}