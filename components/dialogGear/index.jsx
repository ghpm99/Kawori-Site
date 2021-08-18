import { ModalBody, ModalHeader } from '@chakra-ui/modal';
import {
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    Box,
    useColorModeValue,
    InputLeftAddon,
    InputGroup,
    Stack
} from "@chakra-ui/react";
import React, { useState } from 'react';


export default function DialogGear(props) {

    const [state, setState] = useState({
        characterName: props.gear.name,
        class: props.gear.classe,
        battleMode: props.gear.battleMode,
        level: props.gear.level,
        ap: props.gear.ap,
        apawak: props.gear.apAwak,
        dp: props.gear.dp,
        trina: props.gear.trina
    });


    async function handleSubmit(event) {

        event.preventDefault();

        const urlSubmit = "api/gear/" + props.gear.id;

        const res = await fetch(urlSubmit, {
            body: JSON.stringify({
                state
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        })
        const result = await res.json()

        props.setGearState(result);
        props.closeModalDialog();
    }

    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    return (
        <Box
            bg={useColorModeValue('gray.100', 'gray.800')}
            color={useColorModeValue('black', 'white')}
            className={props.gear.gearAtivo ? "active" : null}>

            <ModalHeader
                textAlign="center">
                {props.gear.guildName}
            </ModalHeader>
            <ModalBody>
                
                    <form
                        onSubmit={handleSubmit}>
                            <Stack spacing={4}>
                        <FormControl>
                            <InputGroup>
                                <InputLeftAddon children="Nome personagem:" />
                                <Input
                                    type="text"
                                    name='characterName'
                                    value={state.characterName}
                                    onChange={handleChange}
                                    
                                />
                            </InputGroup>
                        </FormControl>

                        <FormControl>
                            <InputGroup>
                                <InputLeftAddon children="Classe:" />
                                <Select
                                    name="class"
                                    onChange={handleChange}
                                    defaultValue={props.gear.classe}>
                                    {props.classes &&
                                        props.classes.map((classes) => (
                                            <option
                                                key={classes}
                                                value={classes}>
                                                {classes}
                                            </option>
                                        ))}
                                </Select>
                            </InputGroup>
                        </FormControl>
                        <FormControl>

                            <InputGroup>
                                <InputLeftAddon children="Modo de batalha:" />
                                <Select name="battleMode"
                                    onChange={handleChange}
                                    defaultValue={props.gear.battleMode}>
                                    {props.battleModes && props.battleModes.map((battle) => (
                                        <option
                                            key={battle}
                                            value={battle}>
                                            {battle}
                                        </option>
                                    ))}
                                </Select>
                            </InputGroup>
                        </FormControl>
                        <FormControl>

                            <InputGroup>
                                <InputLeftAddon children="Level:" />
                                <Input
                                    type='number'
                                    name='level'
                                    value={state.level}
                                    onChange={handleChange}
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl>

                            <InputGroup>
                                <InputLeftAddon children="AP:" />
                                <Input
                                    type='number'
                                    name='ap'
                                    value={state.ap}
                                    onChange={handleChange}
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl>


                            <InputGroup>
                                <InputLeftAddon children="Ap Despertado:" />
                                <Input
                                    type='number'
                                    name='apawak'
                                    value={state.apawak}
                                    onChange={handleChange}
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl>

                            <InputGroup>
                                <InputLeftAddon children="Defesa:" />
                                <Input
                                    type='number'
                                    name='dp'
                                    value={state.dp}
                                    onChange={handleChange}
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl>

                            <InputGroup>
                                <InputLeftAddon children="Trina:" />
                                <Select
                                    name="trina"
                                    onChange={handleChange}
                                    defaultValue={props.gear.trina}>
                                    {props.trina && props.trina.map((trina) => (
                                        <option
                                            key={trina}
                                            value={trina} >
                                            {trina}
                                        </option>
                                    ))}
                                </Select>
                            </InputGroup>
                        </FormControl>

                        <Button
                            width="full"                           
                            type='submit'>
                            Save
                        </Button>
                        </Stack>
                    </form>
                
            </ModalBody>

        </Box>
    );

}


