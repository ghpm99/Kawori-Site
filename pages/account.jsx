import {
    Center, Heading, Image,
    Progress, Stack, Text, Button, Box
} from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/spinner';
import { getSession, signOut, useSession } from 'next-auth/client';
import { ContainerBox } from "../components/container";
import Head from '../components/head';
import InternalMenu from '../components/internalMenu';
import Menu from '../components/menu';

function Account(props) {
    return (
        <ContainerBox>
            <Head title='Kawori bot' />
            <Menu />
            <InternalMenu />
            <Page />
        </ContainerBox>
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
    return {
        props: {},
    }

}

function Page(props) {
    const [session] = useSession();

    if (session) {
        return (
            <>
                <ProfileSimple user={session.user} />
            </>
        )
    }

    return (<Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl" />)
}

function ProfileSimple(props) {
    return (
        <Center py={12}>
            <ContainerBox
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}

                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <ContainerBox
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${props.user.image})`,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={props.user.image}
                    />
                </ContainerBox>
                <Stack pt={10} align={'center'}>

                    <ProfileName
                        name={props.user.name}
                        discriminator={props.user.discriminator}
                    />

                    <Box fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        <ProfileExperience
                            level={props.user.level}
                            exp={props.user.exp}
                            expRequired={props.user.expRequired}
                            msgCount={props.user.msgCount}
                            cmdCount={props.user.cmdCount}
                        />
                    </Box>
                    <Stack
                        direction={'row'}
                        align={'center'}>

                        <Box
                            fontWeight={800}
                            fontSize={'xl'}>
                            <Profilediv
                                banned={props.user.banned}
                                region={props.user.region}
                            />
                        </Box>

                    </Stack>
                </Stack>
            </ContainerBox>
        </Center>
    );
}

function ProfileName(props) {
    return (
        <Text color={'gray.500'} fontSize={'sm'} >
            {props.name}#{props.discriminator}
        </Text>
    )
}

function ProfileExperience(props) {
    return (
        <div>
            <div>Level:{props.level} Exp: {props.exp}/{props.expRequired}</div>
            <Progress value={props.exp} max={props.expRequired} />
            <div>Mensagens:{props.msgCount}</div>
            <div>Comandos:{props.cmdCount}</div>
        </div>
    )
}

function Profilediv(props) {
    return (
        <div>
            <div>Banido:{props.banned ? <a>Sim</a> : <a>Não</a>}</div>
            <div>Regiao:{props.region}</div>
            <SignOutButton />
        </div>
    )
}

function SignOutButton() {
    return (
        <Button onClick={() => signOut()}>Deslogar</Button>
    )
}