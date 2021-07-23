import Head from '../components/head';
import Menu from '../components/menu';
import styled from 'styled-components';
import InternalMenu from '../components/internalMenu';
import { getSession } from 'next-auth/client';
import { parseISO, format } from "date-fns";
import authorization from '../security/authorization';

const Container = styled.div`
color:white;
padding:15px;
display:flex;
flex-wrap:wrap;
flex-direction:row;
`;

const MembroCarStyled = styled.div`
border-radius: 10px;
padding:15px;
margin:10px;
background-color:rgba(0, 0, 0, 0.2);
`;

const NameStyled = styled.div`
text-align:center;
font-size:32px;
padding:10px;
`;

const FamilyNameStyled = styled.div`

`;

const BannedStyled = styled.div`
a{
    &.alert{
        color:red;
    }
    &.normal{
        color:green;
    }
}
`;

const GearUpdateStyled = styled.div`

`;

const GuildContainerStyled = styled.div`

`;

const GuildNameStyled = styled.div`

`;

const GuildRegionStyled = styled.div`

`;

const WelcomeMessageStyled = styled.div`

`;

const ExperienceContainerStyled = styled.div`
color: white;
text-align: center;
justify-content: center;
align-items: center;
padding:15px;
`;

const LevelStyled = styled.div`

`;

const ProgressLevelStyled = styled.progress`

`;

const CmdStyled = styled.div`

`;

function Guilds(props) {

    return (
        <div>
            <Head title='Kawori bot' />
            <Menu ativo={0} />
            <InternalMenu ativo={1}/>
            <Page props={props} />
        </div>
    )
}

export default Guilds;

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
        const urlStatus = process.env.API_SPRING_URL + "/guilds/" + session.user.id;

        const res = await fetch(urlStatus, {
            method: "GET",
            headers: authorization()
        });
        const data = await res.json();
        return {
            props: { data }
        }
    } catch {
        return {
            props: {
                data: {

                }
            }
        }
    }

}

function Page(props) {
    return (
        <Container>
            {props.props.data.membros && props.props.data.membros.map((membro) => (
                <MembroCard membro={membro} />
            ))}
        </Container>
    )
}

function MembroCard(props) {
    const dateGear = parseISO(props.membro.gearUpdate);
    return (
        <MembroCarStyled>
            <NameStyled>{props.membro.nick}</NameStyled>
            <FamilyNameStyled>Nome de familia:{props.membro.familyName}</FamilyNameStyled>
            <BannedStyled>{props.membro.banned ? <a className='alert' >BANIDO</a> : <a className='normal' >Normal</a>}</BannedStyled>
            <GearUpdateStyled>Gear atualização:{format(dateGear, 'dd/MM/yyyy')}</GearUpdateStyled>
            <GuildCard guild={props.membro.guild} />
        </MembroCarStyled>
    )
}

function GuildCard(props) {
    return (
        <GuildContainerStyled>
            <GuildNameStyled>Guild nome:{props.guild.name}</GuildNameStyled>
            <GuildRegionStyled>Guild região:{props.guild.region}</GuildRegionStyled>
            <WelcomeMessageStyled>Mensagem de Bem-vindo:{props.guild.defaultWelcomeMessage}</WelcomeMessageStyled>
            <GuildExperience level={props.guild.level} exp={props.guild.exp} expRequired={props.guild.expRequired} cmdCount={props.guild.cmdCount} />
        </GuildContainerStyled>
    )
}

function GuildExperience(props) {
    return (
        <ExperienceContainerStyled>
            <LevelStyled>Level:{props.level} Exp: {props.exp}/{props.expRequired}</LevelStyled>
            <ProgressLevelStyled value={props.exp} max={props.expRequired} />
            <CmdStyled>Comandos:{props.cmdCount}</CmdStyled>
        </ExperienceContainerStyled>
    )
}