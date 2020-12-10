import Head from '../components/head';
import Menu from '../components/menu';
import styled from 'styled-components';

const urlStatus = "http://localhost:8080/status";

const Title = styled.h3`
font-size: 30px;
color:black;
`

function Status(){
    console.log(getJSonStatus());
    return (
        <div>            
            <Head title='Kawori bot' /> 
            <Menu  ativo={4}/>
            <Page />
        </div>
    )
}

export default Status;

function Page(){
    return (
        <Title>
            Status
        </Title>
    )
}

function getJSonStatus(){
    return fetch(urlStatus)
    .then((response) => response.json())
    .then((responseJson) => {        
        return responseJson;
    })
    .catch((error) => {
        console.error(error);
    });
}