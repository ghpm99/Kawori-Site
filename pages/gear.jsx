import authorization from '../security/authorization';
import { getSession} from 'next-auth/client';
import styled from 'styled-components';
import Head from '../components/head';
import Menu from '../components/menu';
import InternalMenu from '../components/internalMenu';
import React, { useState } from 'react';
import GearCardComponent from '../components/gearCard';
import DialogGear from '../components/dialogGear';
import Modal from 'styled-react-modal';

const ContainerStyled = styled.div`
color:white;
padding:15px;
display:flex;
flex-wrap:wrap;
flex-direction:row;
`;

const StyledModal = Modal.styled`
width: 50%;  
  display: flex;
  align-items: center;
  justify-content: center;
`;




function Gear(props) {
    
    return (
        <div>
            <Head title='Kawori bot' />
            <Menu ativo={0} />
            <InternalMenu ativo={2}/>
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
        const classes = await loadClasses();

        const battleModes = await loadBattleModes();

        const trina = await loadTrina();

        const urlStatus = process.env.API_SPRING_URL + "/gearsByIdUser?id=" + session.user.id;

        const res = await fetch(urlStatus, {
            method: "GET",
            headers: authorization()
        });     

        const data = await res.json();  

        return {
            props: {
                data,
                classes,
                battleModes,
                trina,
                session
            }
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
                <GearCard gear={gear} classes={props.gear.classes} battleModes={props.gear.battleModes} trina={props.gear.trina} />
            ))}
        </ContainerStyled>
    )
}

function GearCard(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [gearState, setGearState] = useState(props.gear);

    function toggleModal(e) {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <GearCardComponent gear={gearState} onClickDialog={toggleModal} />
            <StyledModal isOpen={isOpen} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
                <DialogGear gear={gearState} classes={props.classes} battleModes={props.battleModes} trina={props.trina} setGearState={setGearState} closeModalDialog={toggleModal} />
            </StyledModal>
        </>
    );



}

async function loadClasses() {

    const urlStatus = process.env.API_SPRING_URL + "/config/class";    

    const res = await fetch(urlStatus, {
        method: "GET",
        headers: authorization()
    });

    return res.json();
}

async function loadBattleModes() {
    const urlStatus = process.env.API_SPRING_URL + "/config/battlemode";    

    const res = await fetch(urlStatus, {
        method: "GET",
        headers: authorization()
    });

    return res.json();
}

async function loadTrina() {
    const urlStatus = process.env.API_SPRING_URL + "/config/trina";    

    const res = await fetch(urlStatus, {
        method: "GET",
        headers: authorization()
    });

    return res.json();
}