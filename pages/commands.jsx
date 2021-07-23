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
                    <hr/>
                    Parametros:
                    <br/>comando = <Point>Opcional</Point> comando para visualizar ajuda sobre.
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
                <hr/>
                Parametros:
                <br/>idioma = idiomas disponiveis: pt-br, espanol
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
                <hr/>
                Parametros:
                <br/>(atributo=valor) = atributos validos: AP,APAWAK,DP,LVL,NAME,CLASS,SKILL 
                <br/><Point>CLASS</Point> : archer,berserker,darkknight,guardian,kunoichi,lahn,maehwa,musah,mystic,ninja,ranger,
                <br/>shai,sorceress,striker,tamer,valkyrie,warrior,witch,wizard
                <br/><Point>SKILL</Point> : awakening,succession
                <br/>-add = adiciona uma nova gear
                <br/>-select = comando para alternar entre os gear cadastrados.
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
                <hr/>
                Parametros:
                <br/>criterio = GS,AP,APAWAK,DP,LVL
                </TableDescription>
                <TableExample>
                {prefix}rank ap
                </TableExample>
            </TableRow>           

            <TableRow>
                <TableCommand>
                    {prefix}nw
                </TableCommand>
                <TableDescription>
                Agenda uma node war
                <hr/>
                Parametros:
                <br/>-show = Mostra as NodeWar agendadas
                <br/>-presence (id) = Mostra a lista de presença da node war de acordo com a reação no aviso.
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
                <hr/>
                Parametros:
                <br/>canais = canal/canais mencionados que serão configurados
                <br/>Configura se o bot pode aceitar comandos dos canais mencionados.
                <br/>Obs: os canais deverão ser mencionados 
                <br/>cargos = cargo/cargos mencionados que serão configurados
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
                <hr/>
                Parametros:
                <br/>canal = mencionar o canal que deseja receber a configuração de auto-role
                <br/>role = mencionar a role que deseja ser aplicada na configuração
                <br/>texto = mensagem para que seja aplicada o role
                <br/> <Point>Sem parametro</Point> = abre janela de configuração de auto-role
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
                <hr/>
                Parametros:
                <br/>opção1,opção2,opção3,[...] = opções que serão escolhidas aleatoriamente.
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
                <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
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
                    <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
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
                <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
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
                <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
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
                <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
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
                <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
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
                <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
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
                <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
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
                    <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
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
                    <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
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
                <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
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
                <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
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
                    <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
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
                    <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
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
                    <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
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
                    <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
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
                <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
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
                    <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
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
                <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
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
                    <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
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
                <hr/>
                Parametros:
                <br/>@user = mencione o usuario para a interação.
                    </TableDescription>
                    <TableExample>
                    {prefix}explosion <Point>user</Point>
                    </TableExample>
            </TableRow>

        </Table>
    )
}