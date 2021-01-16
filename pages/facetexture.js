import Head from '../components/head';
import Menu from '../components/menu';
import styled from 'styled-components';
import Card from '../components/card';
import Link from 'next/link';

const Title = styled.h1`
text-align:center;
color:white;
font-size:52px;
`;

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

const RequirementTable = styled.table`
color:white;
text-align:center;
margin-left: auto;
margin-right: auto;
`;

const FirstRow = styled.tr`
font-style:italic;
font-size:20px;
`;

const Cell = styled.th`
padding:10px 50px;
`;

const Row = styled.tr`
border: 1px solid black;
`;

const Text = styled.ul`
color:white;
font-size:22px;
text-align:justify;
`;

const Point = styled.i`
color: #FA8072;
`;

const HowToUseTable = styled.table`
`;

const HowToUseRow = styled.tr`
`;

const DownloadButton = styled.a`
background-color:#4CAF50;
cursor: pointer;
text-align: center;
border:none;
padding:15px 32px;
text-decoration:none;
font-size:24px;
border-radius:4px;
transition-duration:0.4s;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
width:50%;
&:hover{
    background-color:white;
    color:#36393f;
}
`;

const DownloadDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:25px;
margin-bottom:50px;
`;

const InternalMenuDiv = styled.div`
display: -webkit-flex;
display: flex;
-webkit-align-items: center;
align-items: center;
-webkit-justify-content: center;
justify-content: center;
flex-direction: row;
flex-wrap:wrap;
overflow: hidden;
background-color: rgba(255, 255, 255, 0.1);      
width: auto;
padding:20px;
float:none;
margin-top:20px;
margin-bottom:5px;
a{    
color: #D3D3D3;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 40px;
&:hover {        
    color: white;
    }    
 }
`;

const version = "Versão 0.01B";

function Main(){    
    return(
        <>
            <Head title='Kawori bot' /> 
            <Menu  ativo={3}/>
            <InternalMenu />
            <Intro />
            <HowToUse />
            <Requirement />
            <Download />

        </>
    )
}

export default Main;

function Intro(){
    return(
        <Cards>
            <Card imagem='https://i.imgur.com/Eh5BL10.png' 
            texto='Face Texture Editor é um programa simples que auxilia a alterar as Face Texture dos personagens do Black Desert Online, criando assim um visual belo' alinhamento='1'/>
            <Card imagem='https://i.imgur.com/0GUMUML.png' 
            texto='De forma facil e simples personalize a seleção de personagem de seu jogo!' alinhamento='0'/>
            <Card imagem='https://i.imgur.com/fYJxH1X.png' 
            texto='Utilize qualquer imagem para uma personalização completa!' alinhamento='1'/>
            <Card imagem='https://i.imgur.com/Ps0tyoy.png' 
            texto='Surpreenda seus amigos com sua seleção de personagem!' alinhamento='0'/>
        </Cards>
    )
}

function HowToUse(){
    return(
        <div id="HowToUse">
            <Title>Como Usar</Title>
            <HowToUseTable>
                <HowToUseRow>
                    <Text>Configurando as Face Texture</Text>
                </HowToUseRow>

                <HowToUseRow>
                    <Text>Em <Point>Edit/Face Textures</Point> configure a ordem dos personagens.<br/>
                    Para realizar a configuração utilize os dois clicks do mouse sobre a posição que deseja alterar.
                    Na tela de seleção de arquivo é necessario selecionar a imagem padrao do personagem.<br/>
                    No canto esquerdo selecione a classe e se deseja mostrar o icone da classe ao exportar.<br/>
                    Repita o processo ate que a tela no programa esteja igual a tela de seleção de personagem do seu jogo.<br/>
                    Feche a tela interna do programa no <Point>"X"</Point>(Atenção para encerrar somente a tela interna dentro do programa e não o programa).
                    </Text>
                </HowToUseRow>

                <HowToUseRow>
                    <Text>Configurando o background</Text>
                </HowToUseRow>

                <HowToUseRow>
                    <Text>
                        Em <Point>Edit/Background</Point> selecione a imagem que deseje colocar de fundo.<br/>
                        Utilize o botão <Point>Alterar Imagem</Point> para buscar e selecionar a imagem.<br/>
                        Clicando e arrastando é possivel reposicionar a imagem.<br/>
                        Utilizando o scroll do mouse é possivel aumentar o zoom ou diminuir o zoom.<br/>
                        Apos realizar os ajustes necessarios fecha a tela interna do programa no <Point>"X"</Point>(Atenção para encerrar somente a tela interna dentro do programa e não o programa).
                    </Text>
                </HowToUseRow>

                <HowToUseRow>
                    <Text>
                        Exportando imagens
                    </Text>
                </HowToUseRow>

                <HowToUseRow>
                    <Text>
                        <Point>É recomendado criar um backup da pasta FaceTexture!<br/></Point>
                        Crie uma pasta para salvar as FaceTexture novas.<br/>
                        Apos realizar as configurações necessarias vá ate <Point>Edit/Exportar</Point><br/>
                        Verifique o preview e se está tudo conforme configurado.<br/>
                        Caso deseje só alterar a imagem de um personagem utilize o botão <Point>Exportar</Point><br/>
                        Caso deseje alterar para a imagem de fundo selecionada marque a caixa <Point>Background</Point> localizada no canto esquerdo.<br/>
                        Verifique o resultado e utilize o botão <Point>Exportar</Point> para continuar o processo.<br/>
                        Localize e selecione a pasta que deseje salvar as FaceTexture novas e confirme.<br/>
                        Copie o conteudo exportado na pasta criada e cole na pasta <Point>Documentos/Black Desert/FaceTexture</Point><br/>
                        Verifique no jogo o resultado!
                    </Text>
                </HowToUseRow>

            </HowToUseTable>
        </div>
    )
}

function Requirement(){
    return(
        <div id="Requirement">
            <Title>Requisitos Mínimos</Title>
            <RequirementTable>
                <FirstRow>
                    <Cell>Categoria</Cell>
                    <Cell>Mínimo</Cell>
                </FirstRow>
                <Row>
                    <Cell>Sistema</Cell>
                    <Cell>Java Version 8 Update 271</Cell>
                </Row>
                <Row>
                    <Cell>Disco</Cell>
                    <Cell>30 MB</Cell>
                </Row>
                <Row>
                    <Cell>Memória</Cell>
                    <Cell>1 GB RAM</Cell>
                </Row>
            </RequirementTable>
        </div>
    )
}

function Download(){
    return(
        <DownloadDiv id="Download">
            <DownloadButton type="button" href="https://drive.google.com/uc?export=download&id=1G2oMSGAY6pJaWslXcQ_s0QrUEqU55ZVg">Download {version}</DownloadButton>
        </DownloadDiv>
    )
}



function InternalMenu(){
    return(
        <InternalMenuDiv>            
            <Link href="#HowToUse" >
                <a>Como usar</a>
            </Link>
            <Link href="#Requirement" >
                <a>Requisitos</a>
            </Link>
            <Link href="#Download" >
                <a>Download</a>
            </Link>
        </InternalMenuDiv>
    )
}