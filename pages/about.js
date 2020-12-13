import Head from '../components/head';
import Menu from '../components/menu';
import styled from 'styled-components';

const Title = styled.h3`
font-size: 30px;
color:black;
`

function About(){
    return (
        <div>            
            <Head title='Kawori bot' /> 
            <Menu  ativo={4}/>
            <Page />
        </div>
    )
}

export default About;

function Page(){
    return (
        <Title>
            about
        </Title>
    )
}