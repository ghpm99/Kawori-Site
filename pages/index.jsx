import Head from '../components/head';
import Menu from '../components/menu';
import styled from 'styled-components';
import Card from '../components/card';


const Cards = styled.div`
display: -webkit-flex;
display: flex;
-webkit-align-items: center;
align-items: center;
-webkit-justify-content: center;
justify-content: center;
text-align:center;
flex-direction:column;
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
            texto='Ola! Meu nome é Kawori e estou aqui para te auxiliar com seu grupo no Discord.' alinhamento='1'/>
            <Card imagem='https://i.imgur.com/soEVRkA.png'
            texto='Possuo um sistema de Auto-Roles simples e facil de utilizar.' alinhamento='0'/>
            <Card imagem='https://i.imgur.com/kGbSPrO.png'
            texto='Caso você possua uma guild do Black Desert, eu posso te ajudar a guardar as informações dos membros dela.' alinhamento='1' />
            <Card imagem='https://i.imgur.com/oKTN61P.png'
            texto='Também possuo varios comandos de interação e muito mais!' alinhamento='0' />
        </Cards>
    )
}