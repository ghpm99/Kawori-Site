import authorization from '../../../security/authorization';
import { getSession } from 'next-auth/client';

export default async function handler(req, res) {   

    const session = await getSession({ req });
    const { id } = req.query;

    if (!session) {
        res.status(401).json({ status: "Unauthorized" });
        return;
    }

    if (req.method == "DELETE") {      
        

        const urlStatus = process.env.API_SPRING_URL + "/gear/gear?idUser=" + session.user.id + "&idGear=" + id;

        const resBack = await fetch(urlStatus, {
            method: "DELETE",
            headers: authorization()
        });


        res.status(resBack.status).json({ status: resBack.statusText });
        
    }else if(req.method == "GET"){
       
        const urlStatus = process.env.API_SPRING_URL + "/gear/gearById?idGear=" + id;

        const resBack = await fetch(urlStatus, {
            method: "GET",
            headers: authorization()
        });

        const data = await resBack.json();       

        res.status(resBack.status).json(data);

    }else if(req.method == "PUT"){
        
        const body = req.body;        

        const urlPostGear = process.env.API_SPRING_URL + "/gear/gear?idUser=" + session.user.id + "&idGear=" + id + "&characterName=" + body.state.characterName + "&class=" + body.state.class +
        "&battleMode=" + body.state.battleMode + "&level=" + body.state.level + "&ap=" + body.state.ap + "&apawak=" + body.state.apawak + "&dp=" + body.state.dp + "&trina=" + body.state.trina

        const resBack = await fetch(urlPostGear,{
            method: "PUT",
            headers: authorization()
        });

        const data = await resBack.json();     

        res.status(resBack.status).json(data);
    }



}