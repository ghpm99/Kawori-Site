import { CheckIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Heading, List, ListIcon, ListItem, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import styled from 'styled-components';
import Card from '../components/card';
import Head from '../components/head';
import Menu from '../components/menu';


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


function Main() {
    return (
        <>
            <Head title='Kawori bot' />
            <Menu ativo={3} />
            <InternalMenu />
            <Intro />
            <HowToUse />
            <Requirement />
            <Download />

        </>
    )
}

export default Main;

function Intro() {
    return (
        <Box>
            <Card imagem='/Eh5BL10.png'
                texto='Face Texture Editor é um programa simples que auxilia a alterar as Face Texture dos personagens do Black Desert Online, criando assim um visual belo' alinhamento='1' />
            <Card imagem='/0GUMUML.png'
                texto='De forma facil e simples personalize a seleção de personagem de seu jogo!' alinhamento='0' />
            <Card imagem='/fYJxH1X.png'
                texto='Utilize qualquer imagem para uma personalização completa!' alinhamento='1' />
            <Card imagem='/Ps0tyoy.png'
                texto='Surpreenda seus amigos com sua seleção de personagem!' alinhamento='0' />
        </Box>
    )
}

function HowToUse() {
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.800')} color={useColorModeValue('black', 'white')} id="HowToUse">
            <Heading as="h1" size="4xl">Como Usar</Heading>
            <Table>
                
                <Tr>
                    <ListItem>"Configurando as Face Texture"</ListItem>
                </Tr>

                <Tr>
                    <ListItem>Em Edit/Face Textures configure a ordem dos personagens.<br />
                        Para realizar a configuração utilize os dois clicks do mouse sobre a posição que deseja alterar.
                        Na tela de seleção de arquivo é necessario selecionar a imagem padrao do personagem.<br />
                        No canto esquerdo selecione a classe e se deseja mostrar o icone da classe ao exportar.<br />
                        Repita o processo ate que a tela no programa esteja igual a tela de seleção de personagem do seu jogo.<br />
                        Feche a tela interna do programa no "X"(Atenção para encerrar somente a tela interna dentro do programa e não o programa).
                    </ListItem>
                </Tr>

                <Tr>
                    <ListItem>Configurando o background</ListItem>
                </Tr>

                <Tr>
                    <ListItem>
                        Em Edit/Background selecione a imagem que deseje colocar de fundo.<br />
                        Utilize o botão Alterar Imagem para buscar e selecionar a imagem.<br />
                        Clicando e arrastando é possivel reposicionar a imagem.<br />
                        Utilizando o scroll do mouse é possivel aumentar o zoom ou diminuir o zoom.<br />
                        Apos realizar os ajustes necessarios fecha a tela interna do programa no "X"(Atenção para encerrar somente a tela interna dentro do programa e não o programa).
                    </ListItem>
                </Tr>

                <Tr>
                    <ListItem>
                        Exportando imagens
                    </ListItem>
                </Tr>

                <Tr>
                    <ListItem>
                        É recomendado criar um backup da pasta FaceTexture!<br />
                        Crie uma pasta para salvar as FaceTexture novas.<br />
                        Apos realizar as configurações necessarias vá ate Edit/Exportar<br />
                        Verifique o preview e se está tudo conforme configurado.<br />
                        Caso deseje só alterar a imagem de um personagem utilize o botão Exportar<br />
                        Caso deseje alterar para a imagem de fundo selecionada marque a caixa Background localizada no canto esquerdo.<br />
                        Verifique o resultado e utilize o botão Exportar para continuar o processo.<br />
                        Localize e selecione a pasta que deseje salvar as FaceTexture novas e confirme.<br />
                        Copie o conteudo exportado na pasta criada e cole na pasta Documentos/Black Desert/FaceTexture<br />
                        Verifique no jogo o resultado!
                    </ListItem>
                </Tr>

            </Table>
        </Box>
    )
}

function Requirement() {
    return (
        <Box
            bg={useColorModeValue('gray.100', 'gray.800')}
            color={useColorModeValue('black', 'white')}
            id="Requirement">
            <Heading
                as="h1"
                size="4xl">
                Requisitos Mínimos
            </Heading >
            <Table>
                <Thead>
                    <Tr>
                        <Th>Categoria</Th>
                        <Th>Mínimo</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Sistema</Td>
                        <Td>Java Version 8 Update 271</Td>
                    </Tr>
                    <Tr>
                        <Td>Disco</Td>
                        <Td>30 MB</Td>
                    </Tr>
                    <Tr>
                        <Td>Memória</Td>
                        <Td>1 GB RAM</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
    )
}

function Download() {

    //link : https://drive.google.com/uc?export=download&id=1G2oMSGAY6pJaWslXcQ_s0QrUEqU55ZVg


    return (
        <Center py={6} bg={useColorModeValue('gray.100', 'gray.800')} color={useColorModeValue('black', 'white')} id="Download">
            <Box
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Stack
                    textAlign={'center'}
                    p={6}
                    color={useColorModeValue('gray.800', 'white')}
                    align={'center'}>
                    <Text
                        fontSize={'sm'}
                        fontWeight={500}
                        bg={useColorModeValue('green.50', 'green.900')}
                        p={2}
                        px={3}
                        color={'green.500'}
                        rounded={'full'}>
                        Full
                    </Text>
                    <Stack direction={'row'} align={'center'} justify={'center'}>
                        <Text fontSize={'6xl'} fontWeight={800}>
                            Free
                        </Text>
                    </Stack>
                </Stack>

                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            Suporte a 23 classes
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            Background customizavel
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            Background individual por personagem
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            Todas funcionalidades
                        </ListItem>
                    </List>
                    <Link href="https://drive.google.com/uc?export=download&id=1G2oMSGAY6pJaWslXcQ_s0QrUEqU55ZVg">
                        <Button
                            mt={10}
                            w={'full'}
                            bg={'green.400'}
                            color={'white'}
                            rounded={'xl'}
                            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                            _hover={{
                                bg: 'green.500',
                            }}
                            _focus={{
                                bg: 'green.500',
                            }}>
                            Download
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Center>
    );
}



function InternalMenu() {
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.800')} color={useColorModeValue('black', 'white')}>
            <Link href="#HowToUse" >
                <ChakraLink px={2}
                    py={1}
                    rounded={'md'}
                    _hover={{
                        textDecoration: 'none',
                        bg: useColorModeValue('gray.100', 'gray.900'),
                    }}>Como usar</ChakraLink>
            </Link>
            <Link href="#Requirement" >
                <ChakraLink px={2}
                    py={1}
                    rounded={'md'}
                    _hover={{
                        textDecoration: 'none',
                        bg: useColorModeValue('gray.100', 'gray.900'),
                    }}>Requisitos</ChakraLink>
            </Link>
            <Link href="#Download" >
                <ChakraLink px={2}
                    py={1}
                    rounded={'md'}
                    _hover={{
                        textDecoration: 'none',
                        bg: useColorModeValue('gray.100', 'gray.900'),
                    }}>Download</ChakraLink>
            </Link>
        </Box >
    )
}