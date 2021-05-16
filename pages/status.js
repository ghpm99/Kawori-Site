import Head from '../components/head';
import Menu from '../components/menu';
import styled from 'styled-components';
import React,{ useState , useEffect} from 'react';


const Title = styled.div`
font-size: 30px;
color:white;
margin:20px;
margin-left:50px;
margin-right:50px;
`

const Center = styled.div`
display: -webkit-flex;
display: flex;
-webkit-align-items: center;
align-items: center;
-webkit-justify-content: center;
justify-content: center;
text-align:center;
flex-direction:column;
height:80vh;
align-self:flex-start;
`;

const Numbers = styled.div`
display: -webkit-flex;
display: flex;
-webkit-align-items: center;
align-items: center;
-webkit-justify-content: center;
justify-content: center;
text-align:center;
flex-direction:row;
`;

const urlStatus = "https://kawori.herokuapp.com/status";

function Status(){
    return (
        <div>
            <Head title='Kawori bot' />            
            <Menu  ativo={3}/>
            <Page />
        </div>
    )
}

export default Status;

function Page(){
   
    const [data, setData] = useState({
        status: "Offline",
        cmdReceived : 0,
        guildCount : 0,
        userCount : 0,
    }); 
   
    useEffect(() => {
       fetch(urlStatus)
       .then((response) => response.json())
       .then((jsonData) => {
           console.log(jsonData);
           setData(jsonData);
       })
    },[]);

    return (
        <Center>
            <Title>
                Status
            </Title>
            <Title>
                {data.status}
            </Title>
            <Numbers>
                <Title>
                    Comandos recebidos
                    <Title>
                    {data.cmdReceived}
                    </Title>
                </Title>
                
                <Title>
                    Grupos
                    <Title>
                    {data.guildCount}
                    </Title>
                </Title>
                
                <Title>
                    Usuarios
                    <Title>
                    {data.userCount}
                    </Title>
                </Title>
                
            </Numbers>            
        </Center>
    )
}