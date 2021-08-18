import Head from '../components/head';
import Menu from '../components/menu';
import InternalMenu from '../components/internalMenu';
import { getSession } from 'next-auth/client';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { ContainerBox } from '../components/container';
import { Grid, GridItem } from '@chakra-ui/layout';
import { Table, Tbody, Td, Th, Thead,Tr } from '@chakra-ui/table';


const PanelMenuStyled = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
background-color: #f1f1f1; 
overflow: auto; 
li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}
li a:hover {
    background-color: #555;
    color: white;
}
li:last-child {
    border-bottom: none;
}
.active {
    background-color: #555;
    color: white;
}
`;


const SearchContainerStyled = styled.div`
padding: 10px 2px 10px;
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
color:white;
align-items: center;
`;

const NavigationPageStyled = styled.div`
display: flex;
align-items: center;
flex-direction: row;
flex-wrap: nowrap;
`;

const ButtonNavigationPageStyled = styled.button`
background-color: rgba(255, 255, 255, 0.1); 
border: none;
border-radius: 8px;
color: white;
padding: 10px 24px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 10px;
transition-duration: 0.4s;
:hover{
    
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
:disabled{
    background-color: #36393f;
    opacity: 0.6;
    cursor: not-allowed;
}
`;

const TextNavigationPageStyled = styled.div`
padding: 0px 10px;
`;

const TableContentStyled = styled.table`
font-family: Arial, Helvetica, sans-serif;
border-collapse: collapse;
width: 100%;
& td, & th {
    border: 1px solid #ddd;
    padding: 8px;
}
  
& tr:nth-child(even){
    background-color: #f2f2f2;
}

& tr:nth-child(odd){
    background-color: white;
}
  
& tr:hover {
    background-color: #ddd;
}
  
& th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #555;
    color: white;
}
`;


export async function getServerSideProps(context) {

    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
            props: {},
        };

    }

    return {
        props: {
            session,
            menu: [
                { params: { id: 0, url: '#', text: "Adventure Fame", api: "api/admin/adventure_fame/all" } },
                { params: { id: 1, url: '#', text: "Auto Role", api: "api/admin/auto_role/all" } },
                { params: { id: 2, url: '#', text: "Canal", api: "api/admin/canal/all" } },
                { params: { id: 3, url: '#', text: "Color BD", api: "api/admin/color/all" } },
                { params: { id: 4, url: '#', text: "Configuration", api: "api/admin/configuration/all" } },
                { params: { id: 5, url: '#', text: "Gif BD", api: "api/admin/gif/all" } },
                { params: { id: 6, url: '#', text: "Guilda", api: "api/admin/guilda/all" } },
                { params: { id: 7, url: '#', text: "Logs", api: "api/admin/log/all" } },
                { params: { id: 8, url: '#', text: "Membro", api: "api/admin/membro/all" } },
                { params: { id: 9, url: '#', text: "Node", api: "api/admin/node/all" } },
                { params: { id: 10, url: '#', text: "NodeWar", api: "api/admin/nodewar/all" } },
                { params: { id: 11, url: '#', text: "NodeWar Presence", api: "api/admin/nodewar_presence/all" } },
                { params: { id: 12, url: '#', text: "Operator", api: "api/admin/operator/all" } },
                { params: { id: 13, url: '#', text: "Personagem", api: "api/admin/personagem/all" } },
                { params: { id: 14, url: '#', text: "Tag", api: "api/admin/tag/all" } }
            ]
        }
    }

}

function admin(props) {

    return (
        <ContainerBox>
            <Head title='Kawori bot' />
            <Menu ativo={0} />
            <InternalMenu ativo={3} />
            <Panel menu={props.menu} />
        </ContainerBox>
    )

}

export default admin;

function Panel(props) {

    const [component, setComponent] = useState(props.menu[0].params);

    return (
        <Grid
            templateAreas={{ md: `'menu main main main main'` }}>
            <PanelNav menu={props.menu} onClick={(url) => { setComponent(url) }} component={component} />
            <InternalPanel component={component} />
        </Grid>
    )
}

function PanelNav(props) {
    return (
        <GridItem gridArea="menu">
            <PanelMenuStyled>
                {props.menu && props.menu.map((menu) => (
                    <li key={menu.params.id}>
                        <a className={props.component.id === menu.params.id ? 'active' : null} href={menu.params.url} onClick={() => props.onClick(menu.params)}>
                            {menu.params.text}
                        </a>
                    </li>
                ))}
            </PanelMenuStyled>
        </GridItem>
    )
}

function InternalPanel(props) {

    return (
        <GridItem gridArea="main">
            <TablePanel component={props.component} />
        </GridItem>
    )
}

function TablePanel(props) {

    const [data, setData] = useState({
        "content": [],
        "pageable": {
            "sort": {
                "sorted": false,
                "unsorted": true,
                "empty": true
            },
            "offset": 0,
            "pageNumber": 0,
            "pageSize": 50,
            "paged": true,
            "unpaged": false
        },
        "totalPages": 0,
        "totalElements": 0,
        "last": true,
        "size": 50,
        "number": 0,
        "sort": {
            "sorted": false,
            "unsorted": true,
            "empty": true
        },
        "numberOfElements": 0,
        "first": true,
        "empty": true
    });

    const [page, setPage] = useState({ number: data.number, size: data.size });

    useEffect(() => {
        getData(props.component.api, page.number, page.size, setData);
    }, [page])

    useEffect(() => {
        setPage(stage => ({ ...stage, number: 0 }));
    }, [props.component])

    return (
        <div>
            <SearchBar page={page} setPage={setPage} data={data} />
            <TableContent data={data} />
        </div>
    )
}

function SearchBar(props) {

    library.add(faSearch);
    library.add(faAngleRight);
    library.add(faAngleLeft);

    const changeSize = (event) => {
        props.setPage(stage => ({ ...stage, size: event.target.value }));

    }

    const nextPage = (event) => {
        props.setPage(stage => ({ ...stage, number: props.page.number + 1 }));
    }

    const previousPage = (event) => {
        props.setPage(stage => ({ ...stage, number: props.page.number - 1 }));
    }

    return (
        <SearchContainerStyled>
            <div>
                <label>
                    Mostrar
                    <select onChange={changeSize} value={props.data.size}>
                        <option value="10" >10</option>
                        <option value="25" >25</option>
                        <option value="50" >50</option>
                        <option value="100" >100</option>
                        <option value="150" >150</option>
                        <option value="200" >200</option>
                    </select>
                    registos
                </label>
            </div>

            <NavigationPageStyled>
                <ButtonNavigationPageStyled onClick={previousPage} disabled={props.data.first}>
                    <FontAwesomeIcon icon="angle-left" />
                </ButtonNavigationPageStyled>
                <TextNavigationPageStyled>
                    {props.page.number + 1}
                </TextNavigationPageStyled>
                <ButtonNavigationPageStyled onClick={nextPage} disabled={props.data.last}>
                    <FontAwesomeIcon icon="angle-right" />
                </ButtonNavigationPageStyled>
            </NavigationPageStyled>
            <div>
                <input type="text" placeholder="Search..." name="search" />
                <button type="submit">
                    <FontAwesomeIcon icon="search" />
                </button>
            </div>

        </SearchContainerStyled>
    )
}



function TableContent(props) {

    if (props.data.empty) {
        return (<div>Sem conteudo</div>)
    }

    const getKeys = () => {
        return Object.keys(props.data.content[0])
    }

    const getHeader = () => {
        var keys = getKeys();
        return keys.map((key, index) => {
            return <Th key={key}>{key.toUpperCase()}</Th>
        })
    }

    const getRowsData = () => {
        var items = props.data.content;
        var keys = getKeys();
        return items.map((row, index) => {
            return <Tr key={row.id}><RenderRow key={index} data={row} keys={keys} /></Tr>
        })
    }


    const RenderRow = (props) => {
        return props.keys.map((key, index) => {
            if (props.data[key] === null) {
                return <Td key={props.data.id + index}>Null</Td>
            } else
                return <Td key={props.data.id + index}>{props.data[key].toString()}</Td>
        })
    }


    return (
        <Table variant="striped">
            <Thead>
                <Tr>
                    {getHeader()}
                </Tr>
            </Thead>
            <Tbody>
                {getRowsData()}
            </Tbody>
        </Table>
    )

}

function getData(urlData, page, size, setData) {

    fetch(urlData, {
        headers: {
            'Content-Type': 'application/json',
            'page': page,
            'size': size
        },
        method: 'GET'
    }).then((res) => {
        res.json().then((data) => {
            setData(data);
        })

    });

}