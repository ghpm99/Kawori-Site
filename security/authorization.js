import { encode } from "js-base64";

function requestAuthorization(){     
    return {"Authorization" : "Basic " + encode(process.env.API_SPRING_ID + ":" + process.env.API_SPRING_SECRET)}; 
    
    
}

export default requestAuthorization;