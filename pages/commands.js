import Head from '../components/head';
import Menu from '../components/menu';
import styled from 'styled-components';

const Columns = styled.div`
display:flex;
background-color:rgba(0, 0, 0, 0.5);

`;

const CommandsColumn = styled.div`
flex:none;
background-color:white;
padding: 1em 1em 1em 1em;
width: 25%;
margin:30px;
position: sticky;
top: 10px;
`;

const Help = styled.div`
display:block;
`;

const Card = styled.div`

`; 

const MenuLabel = styled.p`

`;

const MenuList = styled.ul`

`;

const MenuItem = styled.li`
cursor:pointer;
`;

function Commands(){
    return (
        <div>            
            <Head title='Kawori bot' /> 
            <Menu  ativo={2}/>
            <Page />
        </div>
    )
}

export default Commands;

function Page(){
    return (
        <Columns>
            <CommandsColumn>
                <Card>
                    <MenuLabel>Comandos</MenuLabel>
                    <MenuList>
                         <MenuItem>
                            <a>
                            Black Desert
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a>
                            Automatização
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a>
                            Fun
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a>
                            Util
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a>
                            Configuração
                            </a>
                        </MenuItem>
                    </MenuList>
                </Card>
            </CommandsColumn>
            <Help>
                
            </Help>
        </Columns>
    )
}