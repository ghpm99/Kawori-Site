import { encode } from "js-base64";
import { getSession } from 'next-auth/client';
import Link from 'next/link';
import styled from 'styled-components';
import Head from '../components/head';
import Menu from '../components/menu';

const InternalMenuDiv = styled.div`
display: -webkit-flex;
display: flex;
-webkit-align-items: center;
align-items: center;
-webkit-justify-content: center;
justify-content: center;
flex-direction: row;
flex-wrap:wrap;
overflow: hidden;
background-color: rgba(255, 255, 255, 0.1);      
width: auto;
padding:20px;
float:none;
margin-top:20px;
margin-bottom:5px;
a{    
color: #A9A9A9;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 40px;
&:hover {        
    color: #D3D3D3;
    }   
&.active {        
    color: white;
    }  
 }
`;

const ContainerStyled = styled.div`
color:white;
padding:15px;
display:flex;
flex-wrap:wrap;
flex-direction:row;
`;

const GearCardStyled = styled.div`
padding:15px;
margin:10px;
border-radius: 10px;
background-color:rgba(0, 0, 0, 0.2);
`;

const DiscordNameStyled = styled.div`
text-align:center;
font-size:32px;
padding:10px;
`;

const CharacterNameStyled = styled.div`

`;

const ClassStyled = styled.div`

`;

const BattleStyled = styled.div`

`;

const LevelStyled = styled.div`

`;

const GearScoreStyled = styled.div`

`;

const ApStyled = styled.div`

`;

const ApAwakStyled = styled.div`

`;

const DefenseStyled = styled.div`

`;

const TrinaStyled = styled.div`

`;

const LinkGearStyled = styled.div`

`;

function Gear(props) {
    return (
        <div>
            <Head title='Kawori bot' />
            <Menu ativo={0} />
            <InternalMenu />
            <Page gear={props} />
        </div>
    )
}

export default Gear;

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

    try {
        const urlStatus = process.env.API_SPRING_URL + "/gear/" + session.user.id;

        const res = await fetch(urlStatus, {
            method: "GET",
            headers: { "Authorization": "Basic " + encode(process.env.API_SPRING_ID + ":" + process.env.API_SPRING_SECRET) }
        });
        const data = await res.json();
        return {
            props: { data }
        }
    } catch {
        return {
            props: {
                data: {}
            }
        }
    }

}

function Page(props) {
    return (
        <ContainerStyled>
            {props.gear.data.gears && props.gear.data.gears.map((gear) => (
                <GearCard gear={gear} />
            ))}
        </ContainerStyled>
    )
}

function InternalMenu() {
    return (
        <InternalMenuDiv>
            <Link href="/account" >
                <a>Perfil</a>
            </Link>
            <Link href="/guilds" >
                <a>Grupos</a>
            </Link>
            <Link href="/gear" >
                <a className='active'>Gear</a>
            </Link>
        </InternalMenuDiv>
    )
}

function GearCard(props) {
    console.log(props.gear);
    return (
        <GearCardStyled>
            <DiscordNameStyled>{props.gear.guildName}</DiscordNameStyled>
            <CharacterNameStyled>Nome personagem:{props.gear.name}</CharacterNameStyled>
            <ClassStyled>Classe:{props.gear.classe}</ClassStyled>
            <BattleStyled>Modo de batalha:{props.gear.battleMode}</BattleStyled>
            <LevelStyled>Level:{props.gear.level}</LevelStyled>
            <GearScoreStyled>Gear Score:{props.gear.score}</GearScoreStyled>
            <ApStyled>AP:{props.gear.ap}</ApStyled>
            <ApAwakStyled>Ap Despertado:{props.gear.apAwak}</ApAwakStyled>
            <DefenseStyled>Defesa:{props.gear.dp}</DefenseStyled>
            <TrinaStyled>Trina:{props.gear.trina}</TrinaStyled>
            {props.gear.link && <Link href={props.gear.link}><LinkGearStyled>Imagem Gear</LinkGearStyled></Link>}
        </GearCardStyled>
    )
}