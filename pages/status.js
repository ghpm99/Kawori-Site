import Head from '../components/head';
import Menu from '../components/menu';
import styled from 'styled-components';
import React from 'react';
import { encode } from "js-base64";


const Title = styled.div`
font-size: 30px;
color:white;
margin:20px;
margin-left:50px;
margin-right:50px;
`;

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



function Status(props) {

    return (
        <div>

            <Head title='Kawori bot' />
            <Menu ativo={4} />
            <Page status={props.data.status} cmdReceived={props.data.cmdReceived} guildCount={props.data.guildCount} userCount={props.data.userCount} />

        </div>
    )
}

export default Status;

export async function getServerSideProps(context) {
    try {
        const urlStatus = process.env.API_SPRING_URL + "/status";

        const res = await fetch(urlStatus, {
            method: "GET",
            headers: { "Authorization": "Basic " + encode(process.env.API_SPRING_ID + ":" + process.env.API_SPRING_SECRET) }
        });
        const data = await res.json();
        
        if (!data) {
            return {
                props: {
                    data: {
                        status: "Offline",
                        cmdReceived: 0,
                        guildCount: 0,
                        userCount: 0,
                    }
                }
            }
        }
        return {
            props: { data }
        }
    } catch {
        return {
            props: {
                data: {
                    status: "Offline",
                    cmdReceived: 0,
                    guildCount: 0,
                    userCount: 0,
                }
            }

        }
    }
}

function Page(props) {
    return (
        <Center>
            <Title>
                Status
            </Title>
            <Title>
                {props.status}
            </Title>
            <Numbers>
                <Title>
                    Comandos recebidos
                    <Title>
                        {props.cmdReceived}
                    </Title>
                </Title>

                <Title>
                    Grupos
                    <Title>
                        {props.guildCount}
                    </Title>
                </Title>

                <Title>
                    Usuarios
                    <Title>
                        {props.userCount}
                    </Title>
                </Title>

            </Numbers>
        </Center>
    )
}