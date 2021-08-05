import Head from '../components/head';
import Menu from '../components/menu';
import styled from 'styled-components';
import InternalMenu from '../components/internalMenu';
import { getSession, useSession, signOut } from 'next-auth/client';
import authorization from '../security/authorization';

const Profile = styled.div`
background-color:#2f3237;
display:flex;
flex-wrap:wrap;
align-items: center;
padding:15px;
border-radius: 10px
`;

const Image = styled.img`    
margin-left:auto;
`;

const Name = styled.div`
color: white;
`;

const ExperienceDiv = styled.div`
color: white;
flex-grow: 1;
flex-basis: auto;
text-align: center;
justify-content: center;
align-items: center;
`;

const Information = styled.div`
color:white;

text-align: lefth;
justify-content: center;
align-items: center;
`;



const ProfileAvatarAndName = styled.div`
flex-grow: 0;
flex-basis: auto;
`;

const LevelStyled = styled.div`

`;

const ProgressLevelStyled = styled.progress`

`;

const CmdStyled = styled.div`

`;

const MessageCountStyled = styled.div`

`;

const BannedStyled = styled.div`

`;

const RegionStyled = styled.div`

`;

const SignOutButtonStyled = styled.button`
`;

function Account(props) {
    return (
        <div>
            <Head title='Kawori bot' />
            <Menu />
            <InternalMenu ativo={0}/>
            <Page props={props} />
        </div>
    )
}

export default Account;

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


    const urlStatus = process.env.API_SPRING_URL + "/user/" + session.user.id;
    
    try {
        
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
                    name: session.user.name,
                    discriminator: "",
                    level: 0,
                    exp: 0,
                    expRequired: 0,
                    msgCount: 0,
                    cmdCount: 0,
                    banned: false,
                    email: "",
                    region: ""
                }

            }
        }
    }

}

function Page(props) {
    return (
        <>
            <Profile>
                <ProfileAvatarAndName>
                    <ProfileImage />
                    <ProfileName name={props.props.data.name} discriminator={props.props.data.discriminator} />
                </ProfileAvatarAndName>
                <ProfileExperience level={props.props.data.level} exp={props.props.data.exp}
                    expRequired={props.props.data.expRequired} msgCount={props.props.data.msgCount} cmdCount={props.props.data.cmdCount} />
            </Profile>
            <ProfileInformation banned={props.props.data.banned} email={props.props.data.email} region={props.props.data.region} />
        </>
    )
}

function ProfileImage() {
    const [session] = useSession();    
    return (
        <>
            {session && <Image src={session.user.image} />}
        </>
    )
}

function ProfileName(props) {
    return (
        <Name>
            <a>{props.name}#{props.discriminator}</a>
        </Name>
    )
}

function ProfileExperience(props) {
    return (
        <ExperienceDiv>
            <LevelStyled>Level:{props.level} Exp: {props.exp}/{props.expRequired}</LevelStyled>
            <ProgressLevelStyled value={props.exp} max={props.expRequired} />
            <MessageCountStyled>Mensagens:{props.msgCount}</MessageCountStyled>
            <CmdStyled>Comandos:{props.cmdCount}</CmdStyled>
        </ExperienceDiv>
    )
}

function ProfileInformation(props) {
    return (
        <Information>
            <BannedStyled>Banido:{props.banned ? <a>Sim</a> : <a>Não</a>}</BannedStyled>
            <RegionStyled>Regiao:{props.region}</RegionStyled>
            <SignOutButton />
        </Information>
    )
}

function SignOutButton() {
    return (
        <SignOutButtonStyled onClick={() => signOut()}>Deslogar</SignOutButtonStyled>
    )
}