import Link from 'next/link';
import styled from 'styled-components';
import { useSession, getSession } from 'next-auth/client'

const InternalMenuDiv = styled.div`
display: -webkit-flex;
display: flex;
-webkit-align-items: center;
align-items: center;
-webkit-justify-content: center;
justify-content: center;
flex-direction: row;
flex-wrap:wrap;
overflow: hidden;
background-color: rgba(255, 255, 255, 0.1);      
width: auto;
padding:20px;
float:none;
margin-top:20px;
margin-bottom:5px;
a{    
color: #A9A9A9;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 40px;
&:hover {        
    color: #D3D3D3;
    }   
&.active {        
    color: white;
    }  
 }
`;

function InternalMenu(props) {
    const [session] = useSession();

    return (
        <InternalMenuDiv>
            <Link href="/account" >
                <a className={props.ativo === 0 ? 'active' : null}>Perfil</a>
            </Link>
            <Link href="/guilds" >
                <a className={props.ativo === 1 ? 'active' : null}>Grupos</a>
            </Link>
            <Link href="/gear" >
                <a className={props.ativo === 2 ? 'active' : null}>Gear</a>
            </Link>
            {session && <AdminPage role={session.user.role} ativo={props.ativo} />}

        </InternalMenuDiv>
    )
}

export default InternalMenu;

function AdminPage(props) {
    
    if (props.role == "OWNER") {
        return (
            <Link href="/admin">
                <a className={props.ativo === 3 ? 'active' : null}>Painel Interno</a>
            </Link>
        )
    }
    if (props.role == "ADMIN") {
        return (
            <Link href="/admin">
                <a className={props.ativo === 3 ? 'active' : null}>Painel Interno</a>
            </Link>
        )
    }
    return null;
}