import Head from '../components/head';
import Menu from '../components/menu';
import styled, {createGlobalStyle} from 'styled-components';

const Title = styled.h3`
font-size: 30px;
color:red;
`
const GlobalStyle = createGlobalStyle`
*{
    background:black;
}
`;

function Home(){
    return (
        <div>
            <GlobalStyle />
            <Head title='Kawori bot' /> 
            <Menu />
            <Page />
        </div>
    )
}

export default Home;

function Page(){
    return (
        <Title>
            Hello world!
        </Title>
    )
}
