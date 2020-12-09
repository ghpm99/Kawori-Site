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
        <>
        <Card imagem='https://i.imgur.com/uHVPttO.png' texto='Kawori é um bot para discord, projetado e desenvolvido para auxiliar as guilds do Black Desert Online a gerenciar seus membros.'/>        
        </>
    )
}