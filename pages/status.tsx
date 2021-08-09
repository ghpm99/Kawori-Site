import {
    chakra, SimpleGrid,
    Stat, StatLabel,
    StatNumber, useColorModeValue
} from '@chakra-ui/react';
import React, { ReactNode, useEffect } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiCommand, FiServer } from 'react-icons/fi';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { ContainerBox, ContainerFlex } from '../components/container';
import Head from '../components/head';
import Menu from '../components/menu';
import { statusUpdate } from '../src/store/actions/backend';


function Status(props) {    
    
    return (
        <>
            <Head title='Kawori bot' />
            <Menu />
            <Page />
        </>
    )
}

export default Status;

function Page(props) {

    const status = useSelector((state : RootStateOrAny) => state.status);  
    const dispatch = useDispatch();  
    
    useEffect(() => {
        
        const urlStatus = "/api/status";     

        fetch(urlStatus, {
            method: "GET"
        }).then((res) => {
            res.json().then((data) => {                
                dispatch(statusUpdate(data));
            })
        });
    },[])

    return (
        <ContainerBox maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}  >
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}>
                Status: {status.status}
            </chakra.h1>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard
                    title={'Usuarios'}
                    stat={status.userCount}
                    icon={<BsPerson size={'3em'} />}
                />
                <StatsCard
                    title={'Grupos'}
                    stat={status.guildCount}
                    icon={<FiServer size={'3em'} />}
                />
                <StatsCard
                    title={'Comandos recebidos'}
                    stat={status.cmdReceived}
                    icon={<FiCommand size={'3em'} />}
                />
            </SimpleGrid>
        </ContainerBox>
    );
}

interface StatsCardProps {
    title: string;
    stat: string;
    icon: ReactNode;
}

function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props;
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <ContainerFlex justifyContent={'space-between'} direction="row">
                <ContainerBox pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </ContainerBox>
                <ContainerBox
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}>
                    {icon}
                </ContainerBox>
            </ContainerFlex>
        </Stat>
    );
}

