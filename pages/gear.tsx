import { useDisclosure } from '@chakra-ui/hooks';
import { getSession } from 'next-auth/client';
import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { ContainerBox, ContainerFlex } from '../components/container';
import DialogGear from '../components/dialogGear';
import GearCardComponent from '../components/gearCard';
import Head from '../components/head';
import InternalMenu from '../components/internalMenu';
import Menu from '../components/menu';
import { battleModeupdate, classesUpdate, trinaUpdate } from '../src/store/actions/config';
import { gearUpdate } from '../src/store/actions/gear';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Wrap,
    WrapItem,
} from "@chakra-ui/react"

function Gear(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        loadBattleModes(dispatch);
        loadClasses(dispatch);
        loadTrina(dispatch);
        loadGears(dispatch);
    }, [])

    return (
        <ContainerBox>
            <Head title='Kawori bot' />
            <Menu />
            <InternalMenu ativo={2} />
            <Page gear={props} />
        </ContainerBox>
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

    return {
        props: {
            data: {}
        }
    }


}

function Page(props) {

    const { gears } = useSelector((state: RootStateOrAny) => state);

    return (
        <Wrap>
            {gears.gears
                &&
                gears.gears.map(
                    (gear) => (
                        <GearCard
                            key={gear.id}
                            gear={gear}
                        />
                    ))}
        </Wrap>
    )

}

function GearCard(props) {


    const { isOpen, onOpen, onClose } = useDisclosure();
    const [gearState, setGearState] = useState(props.gear);
    const { config } = useSelector((state: RootStateOrAny) => state);



    return (
        <WrapItem>
            <GearCardComponent
                gear={gearState}
                onClickDialog={onOpen}
            />
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <DialogGear
                        gear={gearState}
                        classes={config.classes}
                        battleModes={config.battlemode}
                        trina={config.trina}
                        setGearState={setGearState}
                        closeModalDialog={onClose}
                    />
                </ModalContent>
            </Modal>
        </WrapItem>
    );



}

async function loadClasses(dispatch) {

    fetch("/api/config/class", {
        method: "GET"
    })
        .then((res) => {
            res.json()
                .then((data) => {
                    dispatch(classesUpdate(data));
                });
        });
}

async function loadBattleModes(dispatch) {

    fetch("/api/config/battlemode", {
        method: "GET"
    })
        .then((res) => {
            res.json()
                .then((data) => {
                    dispatch(battleModeupdate(data));
                });
        });
}

async function loadTrina(dispatch) {

    fetch("/api/config/trina", {
        method: "GET"
    })
        .then((res) => {
            res.json()
                .then((data) => {
                    dispatch(trinaUpdate(data));
                });
        })
}

async function loadGears(dispatch) {
    fetch("/api/gear", {
        method: "GET"
    })
        .then((res) => {
            res.json()
                .then((data) => {
                    dispatch(gearUpdate(data));
                });
        })
}