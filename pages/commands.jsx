import Head from '../components/head';
import Menu from '../components/menu';
import styled from 'styled-components';
import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import requestAuthorization from '../security/authorization';
import useTranslation from '../intl/useTranslation';

const prefix = "k.";

const Point = styled.i`
color: #FA8072;
`;

export async function getStaticProps(context){
    const urlCommands = process.env.API_SPRING_URL + "/config/commands";

        const res = await fetch(urlCommands, {
            method: "GET",
            headers: requestAuthorization()
        });     

        const data = await res.json();  
    return {
        props:{data},
    }
}

function Commands(props) {
    
    return (
        <div>
            <Head title='Kawori bot' />
            <Menu/>
            <Page commands={props.data.commands}/>
        </div>
    )
}

export default Commands;

function Page(props) {
    const {t} = useTranslation();
    return (
        <Table variant="striped">
            <TableCaption>Comandos bot Discord</TableCaption>

            <Thead>
                <Tr>
                    <Th>Comando</Th>
                    <Th>Descrição</Th>
                    <Th>Exemplo</Th>
                </Tr>

            </Thead>
            <Tbody>
                {props.commands.map((command) => (
                    <Tr>
                        <Td>{command.command}</Td>
                        <Td>{t(command.description)}</Td>
                        <Td>{t(command.example)}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}