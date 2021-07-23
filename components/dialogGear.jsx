import styled from 'styled-components';
import React, { useState } from 'react';

const GearCardStyled = styled.div`
    color:white;
    padding:15px;
    margin:10px;
    border-radius: 10px;
    background-color:black;    
    &.active{
        border-color: white;
        border-style: solid;
    }
`;

const DiscordNameStyled = styled.div`
    text-align:center;
    font-size:32px;
    padding:15px;
    width:auto;
`;

const CharacterNameStyled = styled.label`

`;

const ClassStyled = styled.label`

`;

const BattleStyled = styled.label`

`;

const LevelStyled = styled.label`

`;

const ApStyled = styled.label`

`;

const ApAwakStyled = styled.label`

`;

const DefenseStyled = styled.label`

`;

const TrinaStyled = styled.label`

`;

const InputStyled = styled.input`
width:100%;
border:none;
background-color:black;
color:white;
&:focus{
    border: 3px solid #555;
}
`;

const SelectInputStyled = styled.select`
width:100%;
border:none;
background-color:black;
color:white;
`;

const OptionComboBoxStyled = styled.option`

`;

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
        <GearCardStyled className={props.gear.gearAtivo ? "active" : null}>
            <form onSubmit={handleSubmit}>
                <DiscordNameStyled>{props.gear.guildName}</DiscordNameStyled>                
                <CharacterNameStyled>Nome personagem:
                    <InputStyled
                        type="text"
                        name='characterName'
                        value={state.characterName}
                        onChange={handleChange}
                    />
                </CharacterNameStyled>
                <ClassStyled>Classe:</ClassStyled>
                <SelectInputStyled name="class" onChange={handleChange}>
                    {props.classes &&
                        props.classes.map((classes) => (
                            <OptionComboBoxStyled value={classes} selected={classes == props.gear.classe}> {classes}</OptionComboBoxStyled>
                        ))}
                </SelectInputStyled>

                <BattleStyled>Modo de batalha:</BattleStyled>
                <SelectInputStyled name="battleMode" onChange={handleChange}>
                    {props.battleModes && props.battleModes.map((battle) => (
                        <OptionComboBoxStyled value={battle} selected={battle == props.gear.battleMode}>{battle}</OptionComboBoxStyled>
                    ))}
                </SelectInputStyled>

                <LevelStyled>Level:</LevelStyled>
                <InputStyled
                    type='number'
                    name='level'
                    value={state.level}
                    onChange={handleChange}
                />

                <ApStyled>AP:</ApStyled>
                <InputStyled
                    type='number'
                    name='ap'
                    value={state.ap}
                    onChange={handleChange}
                />

                <ApAwakStyled>Ap Despertado:</ApAwakStyled>
                <InputStyled
                    type='number'
                    name='apawak'
                    value={state.apawak}
                    onChange={handleChange}
                />

                <DefenseStyled>Defesa:</DefenseStyled>
                <InputStyled
                    type='number'
                    name='dp'
                    value={state.dp}
                    onChange={handleChange}
                />

                <TrinaStyled>Trina:</TrinaStyled>
                <SelectInputStyled name="trina" onChange={handleChange}>
                    {props.trina && props.trina.map((trina) => (
                        <OptionComboBoxStyled value={trina} selected={trina == props.gear.trina}>{trina}</OptionComboBoxStyled>
                    ))}
                </SelectInputStyled>


                <InputStyled type='submit' value='Save' />
            </form>
        </GearCardStyled>
    );

}


