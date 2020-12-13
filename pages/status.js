import Head from '../components/head';
import Menu from '../components/menu';
import styled from 'styled-components';
import React from 'react';

const urlStatus = "https://201.51.64.103:25566/status";

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

function Status(props){
    return (
        <div>
            <Head title='Kawori bot' /> 
            <Menu  ativo={3}/>
            <Page data={props.data}/>
        </div>
    )
}

export function getStaticProps(){


    return{
        props: {
            data:{
                status: "Offline",
                cmdReceived : 0,
                guildCount : 0,
                userCount : 0,    
            }
        }
    }
}

export default Status;

function Page(props){
   

    return (
        <Center>
            <Title>
                Status
            </Title>
            <Title>
                {props.data.status}
            </Title>
            <Numbers>
                <Title>
                    Comandos recebidos
                    <Title>
                    {props.data.cmdReceived}
                    </Title>
                </Title>
                
                <Title>
                    Grupos
                    <Title>
                    {props.data.guildCount}
                    </Title>
                </Title>
                
                <Title>
                    Usuarios
                    <Title>
                    {props.data.userCount}
                    </Title>
                </Title>
                
            </Numbers>            
        </Center>
    )
}