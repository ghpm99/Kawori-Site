import Head from '../components/head';
import Menu from '../components/menu';
import styled ,{createGlobalStyle} from 'styled-components';

const Title = styled.h1`
font-size: 40px;
color:black;
text-align: center;
`;

const Texto = styled.h3`
text-align:left;
color:white;
`;

const GlobalStyle =  createGlobalStyle`
    body{
        border: 0px solid #000;
        background-image: url('https://i.imgur.com/HntFxNp.jpg');
        background-color: #cccccc;
        background-repeat: no-repeat;
        background-position: lefth;
        background-size: cover; 
        width: auto;
        height: 100%;
    }
`;

function Home(){
    return (
        <div>
            <GlobalStyle />
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
            \nAs principais funções são:\nGerenciamento de gear
            Agendamento de eventos.
        </Texto>
        </>
    )
}