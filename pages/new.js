import Head from '../components/head';
import Menu from '../components/menu';
import styled from 'styled-components';

const Title = styled.h3`
font-size: 30px;
color:black;
`

function New(){
    return (
        <div>            
            <Head title='Kawori bot' /> 
            <Menu ativo={0} />
            <Page />
        </div>
    )
}

export default New;

function Page(){
    return (
        <Title>new</Title>
    )
}