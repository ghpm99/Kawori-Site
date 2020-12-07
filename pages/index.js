import Head from '../components/head';
import Menu from '../components/menu';
import styled from 'styled-components';

const Title = styled.h1`
font-size: 40px;
color:black;
text-align: center;
`;

function Home(){
    return (
        <div>
            <Head title='Kawori bot' />
            <Menu ativo={1}/>
            <Page />
        </div>
    )
}

export default Home;

function Page(){
    return (
        <Title>
            Kawori
        </Title>
    )
}