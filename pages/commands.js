import Head from '../components/head';
import Menu from '../components/menu';
import styled from 'styled-components';

const Title = styled.h3`
font-size: 30px;
color:black;
`

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
        <Title>
            contact
        </Title>
    )
}