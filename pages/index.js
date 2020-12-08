import Head from '../components/head';
import Menu from '../components/menu';
import styled from 'styled-components';

const Title = styled.h1`
font-size: 40px;
color:black;
text-align: center;
`;

const Texto = styled.h3`
text-align:left
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
        <Title>
            Kawori
        </Title>
        <Texto>
            Kawori é um bot para discord, projetado e desenvolvido para auxiliar as guilds do Black Desert Online a gerenciar seus membros. 
        </Texto>
        </>
    )
}