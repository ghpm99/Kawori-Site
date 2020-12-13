import Head from '../components/head';
import Menu from '../components/menu';
import styled from 'styled-components';

const prefix = "k.";

const Table = styled.table`
width:100%;
text-align:center;
color:white;
font-family:sans-serif;
box-shadow:0 0 20px rgba(0,0,0,0.5);
margin: 25px 0;
border:10px;
border-spacing:10px;
border-collapse:collapse;

`;

const TableRow = styled.tr`    

    &:nth-child(even){    
        background-color:#2e2f31;
        color:white;
    }
    &:nth-child(odd){        
        color:#A9A9A9;
    }
`;

const TableTitle = styled.th`
    background-color:rgb(36, 37, 42);
    font-size:24px;
    color:white;
    
`;

const TableCommand = styled.td`
padding:10px;
        
`;

const TableDescription = styled.td`
padding:10px;
    text-align:left;
`;

const TableExample = styled.td`
padding:15px;
`;

const Point = styled.i`
color: #FA8072;
`;

function Commands(){
    return (
        <div>            
            <Head title='Kawori bot' /> 
            <Menu  ativo={2}/>
            <Page />
        </div>
    )
}

export default Commands;

function Page(){
    return (
        <Table>
            <TableRow>
                <TableTitle>Comando</TableTitle>
                <TableTitle>Descrição</TableTitle>
                <TableTitle>Exemplo</TableTitle>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}help
                </TableCommand>
                <TableDescription>
                    Comando para exibir ajuda.
                    <br/>Pode ser utilizado também para obter ajuda sobre um comando especifico.
                    <br/>Utilize o comando <Point>{prefix}help comando</Point> para ter uma ajuda mais especifica para o comando.                    
                    <br/>Caso precise de uma ajuda melhor fique a vontade para entrar no nosso grupo do discord
                    </TableDescription>
                <TableExample>
                    {prefix}help
                    <br/>{prefix}help <Point>info</Point>
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}info
                </TableCommand>
                <TableDescription>
                Mostra informações uteis do perfil do usuario
                </TableDescription>
                <TableExample>
                {prefix}info
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}region
                </TableCommand>
                <TableDescription>
                Altera o idioma
                </TableDescription>
                <TableExample>
                {prefix}region
                </TableExample>
            </TableRow>

            

            <TableRow>
                <TableCommand>
                    {prefix}gear
                </TableCommand>
                <TableDescription>
                Mostra a gear ativa do usuário mencionado, caso não possua ninguem mencionado será mostrada a gear do autor.                
                <br/>Parametros validos:[AP,APAWAK,DP,LVL,NAME,CLASS,SKILL]. 
                <br/><Point>{prefix}gear -add </Point>: adiciona uma nova gear
                <br/><Point>{prefix}gear -select </Point>: comando para alternar entre os gear cadastrados.
                <br/><Point>{prefix}gear (parametro=valor) </Point>: altera dados da gear ativa.
                </TableDescription>
                <TableExample>
                {prefix}gear -add
                <br/>{prefix}gear -select
                <br/>{prefix}gear ap=190 apawak=187
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}rank
                </TableCommand>
                <TableDescription>
                Mostra o rank de Gear de acordo com critério selecionado
                <br/>Critérios disponiveis:GS,AP,APAWAK,DP,LVL
                </TableDescription>
                <TableExample>
                {prefix}rank ap
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}char
                </TableCommand>
                <TableDescription>
                    <Point>**em desuso**</Point>
                <br/>Exibe e altera informações sobre o personagem cadastrado 
                <br/><Point>{prefix}char -all </Point>: Mostra todos personagens cadastrados.
                <br/><Point>{prefix}char -set (parametro=valor)</Point>: Altera informações sobre personagem ativo no momento.
                <br/>Informações alteraveis: NAME, CLASS, SKILL
                <br/>NAME = Altera nome do personagem
                <br/>CLASS = Altera classe do personagem
                <br/>SKILL = Altera entre despertada e sucessão
                <br/>Exemplo de comando <Point>{prefix}char -set CLASS=wr </Point>: altera a classe do personagem ativo para Guerreiro
                <br/>Lista de classes disponiveis:archer,berserker,darkknight,guardian,kunoichi,lahn,maehwa,musah,mystic,ninja,ranger,
                <br/>shai,sorceress,striker,tamer,valkyrie,warrior,witch,wizard
                <br/>Lista de modos de batalha disponiveis:awakening,succession
                </TableDescription>
                <TableExample>
                    
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}nw
                </TableCommand>
                <TableDescription>
                Agenda uma node war
                <br/><Point>{prefix}nw -show </Point>:Mostra as NodeWar agendadas
                <br/><Point>{prefix}nw -presence (id) </Point>:Mostra a lista de presença da node war de acordo com a reação no aviso.
                <br/>O parametro ID se encontra no aviso da NodeWar!
                </TableDescription>
                <TableExample>
                {prefix}nw
                </TableExample>
            </TableRow>            

            <TableRow>
                <TableCommand>
                    {prefix}config
                </TableCommand>
                <TableDescription>
                Configura informações no grupo/servidor
                <br/><Point>{prefix}config (canais)</Point>**canais**=canal/canais mencionados que serão configurados
                <br/>Configura se o bot pode aceitar comandos dos canais mencionados.
                <br/>Obs: os canais deverão ser mencionados 
                <br/><Point>{prefix}config (cargos)</Point>**cargos**=cargo/cargos mencionados que serão configurados
                <br/>Configura quais grupos de comandos poderão ser utilizados.
                <br/>Obs: os cargos deverão ser mencionados
                </TableDescription>
                <TableExample>
                {prefix}config #geral
                <br/>{prefix}config @officers
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}excel
                </TableCommand>
                <TableDescription>
                    Exporta a lista de gear para <Point>Excel</Point>
                </TableDescription>
                <TableExample>
                {prefix}excel
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}autorole
                </TableCommand>
                <TableDescription>
                Comando para configurar o sistema de auto role.
                
                </TableDescription>
                <TableExample>
                {prefix}autorole
                </TableExample>
            </TableRow>
            
            <TableRow>
                <TableCommand>
                    {prefix}achievements
                </TableCommand>
                <TableDescription>
                    <Point>Em construção</Point>
                </TableDescription>
                <TableExample>
                <Point>Em construção</Point>
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}pick
                </TableCommand>
                <TableDescription>
                Escolhe aleatoriamente entre as opções.
                </TableDescription>
                <TableExample>
                {prefix}pick opção1,opção2
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}avatar
                </TableCommand>
                <TableDescription>
                Exibe o avatar do usuário mencionado
                </TableDescription>
                <TableExample>
                {prefix}avatar <Point>user</Point>
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}hug
                </TableCommand>
                <TableDescription>
                    Comando de interação de abraço.
                    </TableDescription>
                    <TableExample>
                    {prefix}hug <Point>user</Point>
                    </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}slap
                </TableCommand>
                <TableDescription>
                Comando de interação de tapa.
                </TableDescription>
                <TableExample>
                {prefix}slap <Point>user</Point>
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}nom
                </TableCommand>
                <TableDescription>
                Comando de interação comendo.
                    </TableDescription>
                    <TableExample>
                    {prefix}nom <Point>user</Point>  
                    </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}cuddle
                </TableCommand>
                <TableDescription>
                Comando de interação acariciando.
                    </TableDescription>
                    <TableExample>
                    {prefix}cuddle <Point>user</Point>
                    </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}kiss
                </TableCommand>
                <TableDescription>
                Comando de interação de beijo;
                </TableDescription>
                <TableExample>
                {prefix}kiss <Point>user</Point>
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}bite
                </TableCommand>
                <TableDescription>
                Comando de interação de mordida
                </TableDescription>
                <TableExample>
                {prefix}bite <Point>user</Point>
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}dance
                </TableCommand>
                <TableDescription>
                Comando de interação de dança
                </TableDescription>
                <TableExample>
                {prefix}dance <Point>user</Point>
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}awoo
                </TableCommand>
                <TableDescription>
                    Awoo! Uma raposa!
                </TableDescription>
                <TableExample>
                {prefix}awoo <Point>user</Point>
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}owo
                </TableCommand>
                <TableDescription>
                    OwO whats this command?
                </TableDescription>
                <TableExample>
                {prefix}owo <Point>user</Point>
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}poke
                </TableCommand>
                <TableDescription>
                Comando de interação cutucar.
                </TableDescription>
                <TableExample>
                {prefix}poke <Point>user</Point>
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}lewd
                </TableCommand>
                <TableDescription>
                Comando de reação, sensualmente envergonhado.
                </TableDescription>
                <TableExample>
                {prefix}lewd <Point>user</Point>
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}blush
                </TableCommand>
                <TableDescription>
                    Comando de reação, envergonhado.
                </TableDescription>
                <TableExample>
                {prefix}blush <Point>user</Point>
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}confused
                </TableCommand>
                <TableDescription>
                    Comando de reação, confuso.
                </TableDescription>
                <TableExample>
                {prefix}confused <Point>user</Point>
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}cry
                </TableCommand>
                <TableDescription>
                    Comando de emoção, chorando.
                </TableDescription>
                <TableExample>
                {prefix}cry <Point>user</Point>
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}sad
                </TableCommand>
                <TableDescription>
                    Comando de emoção, triste.
                </TableDescription>
                <TableExample>
                {prefix}sad <Point>user</Point>
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}pat
                </TableCommand>
                <TableDescription>
                Comando de interação cafune.
                </TableDescription>
                <TableExample>
                {prefix}pat <Point>user</Point>
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}fox
                </TableCommand>
                <TableDescription>
                    Comando de raposinha.
                </TableDescription>
                <TableExample>
                {prefix}fox <Point>user</Point>
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}punch
                </TableCommand>
                <TableDescription>
                Comando de interação soco.
                </TableDescription>
                <TableExample>
                {prefix}punch <Point>user</Point>
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}trap
                </TableCommand>
                <TableDescription>
                    Somente para anjos com asas.
                </TableDescription>
                <TableExample>
                {prefix}trap <Point>user</Point>
                </TableExample>
            </TableRow>

            <TableRow>
                <TableCommand>
                    {prefix}explosion
                </TableCommand>
                <TableDescription>
                Comando de interação explodir.
                    </TableDescription>
                    <TableExample>
                    {prefix}explosion <Point>user</Point>
                    </TableExample>
            </TableRow>

        </Table>
    )
}