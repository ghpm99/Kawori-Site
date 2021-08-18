import { Spinner } from '@chakra-ui/spinner';
import { format, parseISO } from "date-fns";
import { getSession, useSession } from 'next-auth/client';
import { useEffect } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ContainerBox } from '../components/container';
import Head from '../components/head';
import InternalMenu from '../components/internalMenu';
import Menu from '../components/menu';
import { guildsUpdate } from '../src/store/actions/guild';

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

    const dispatch = useDispatch();

    useEffect(() => {
        fetch("/api/guilds", {
            method: "GET"
        }).then((res) => {
            res.json().then((data) => {
                dispatch(guildsUpdate(data));
            });
        })
    }, [])

    return (
        <ContainerBox>
            <Head title='Kawori bot' />
            <Menu />
            <InternalMenu ativo={1} />
            <Page props={props} />
        </ContainerBox>
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
    return { props: {} }

}

function Page(props) {

    const { guilds } = useSelector((state: RootStateOrAny) => state);

    return (
        <Container>
            {guilds.membros && guilds.membros.map((membro) => (
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