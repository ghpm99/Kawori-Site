
function requestAuthorization(){   
   const  keyValue = process.env.API_SPRING_SECRET;
    
    return {"X-Auth-Token" : keyValue}; 
    
}

export default requestAuthorization;