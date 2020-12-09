import Head from '../components/head';
import Menu from '../components/menu';
import styled from 'styled-components';
import Card from '../components/card';

const Title = styled.h1`
font-size: 40px;
color:white;
text-align: center;
`;

const Texto = styled.h3`
text-align:center;
color: rgba(255,255,255,0.9);
`;

const Cards = styled.div`
`;

function Home(){
    return (
        <div>            
            <Head title='Kawori bot' />
            <Menu ativo={1}/>
            <Page />
        </div>
    )
}

export default Home;

function Page(){
    return (
        <Cards>
            <Card imagem='https://i.imgur.com/uHVPttO.png' 
            texto='Ola! Meu nome é Kawori e estou aqui para te auxiliar com seu grupo no Discord.' alinhamento='right'/>
            <Card imagem='https://i.imgur.com/soEVRkA.png'
            texto='Sistema de Auto-Roles simples e facil de utilizar.' alinhamento='left'/>
        </Cards>
    )
}