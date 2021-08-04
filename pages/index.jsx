import Card from '../components/card';
import { Container } from '../components/Container';
import Head from '../components/head';
import Menu from '../components/menu';
import useTranslation from '../intl/useTranslation';

function Home(){ 
    
    return (
        <div>            
            <Head title='Kawori bot' />
            <Menu/>
            <Page />
        </div>
    )
}

export default Home;

function Page(){
    const {t} = useTranslation();
   
    return (
        <Container>            
            <Card imagem='/uHVPttO.png' 
            texto={t("index_card_text_01")} alinhamento='1'/>
            <Card imagem='/soEVRkA.png'
            texto={t("index_card_text_02")} alinhamento='0'/>
            <Card imagem='/kGbSPrO.png'
            texto={t("index_card_text_03")} alinhamento='1' />
            <Card imagem='/oKTN61P.png'
            texto={t("index_card_text_04")} alinhamento='0' />
        </Container>
    )
}