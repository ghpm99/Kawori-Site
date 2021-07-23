import styled from 'styled-components';

const GearCardStyled = styled.div`
    padding:15px;
    margin:10px;
    border-radius: 10px;
    background-color:rgba(0, 0, 0, 0.2);
    &.active{
        border-color: white;
        border-style: solid;
    }
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

const LinkGearStyled = styled.a`
    color:white;
    text-decoration: none;
`;

export default function GearCardComponent(props) {
    return (
        <GearCardStyled className={props.gear.gearAtivo ? "active" : null} onDoubleClick={props.onClickDialog}>
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
            {props.gear.link && <LinkGearStyled target="_blank" href={props.gear.link}><div>Imagem Gear</div></LinkGearStyled>}
        </GearCardStyled>
    );
}