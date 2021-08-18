import { Table, TableCaption, Tbody, Td, Th, Thead, Tr ,Box} from '@chakra-ui/react';
import Head from '../components/head';
import Menu from '../components/menu';
import useTranslation from '../intl/useTranslation';
import requestAuthorization from '../security/authorization';
import {ContainerBox} from '../components/container/index';


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
        <ContainerBox>
            <Head title='Kawori bot' />
            <Menu/>
            <Page commands={props.data.commands}/>
        </ContainerBox>
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
                    <Tr key={command.command}>
                        <Td key={command.command}>{command.command}</Td>
                        <Td key={command.description}>{t(command.description)}</Td>
                        <Td key={command.example}>{t(command.example)}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}