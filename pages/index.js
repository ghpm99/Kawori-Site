import Head from '../components/head';
import Menu from '../components/menu';
import styled from 'styled-components';

const Title = styled.h3`
font-size: 30px;
color:black;
`

function Home(){
    return (
        <div>            
            <Head title='Kawori bot' /> 
            <Menu  ativo={1}/>
            <Page />
        </div>
    )
}

export default Home;

function Page(){
    return (
        <Title>
            home
        </Title>
    )
}
