import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const MenuNav = styled.div`
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.0);      
    width: auto;
    padding:2px;
    a{
    float: right;
    color: #A9A9A9;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    &:hover {        
        color: #D3D3D3;
      }
    &.active {        
        color: white;
      }      
    }
`;


function Menu(props){
    
    return(
        <MenuNav >
            <Link href="https://discordapp.com/api/oauth2/authorize?client_id=622218589243572224&permissions=8&scope=bot">
                <a>Incorporar Bot!</a>
            </Link>
            <Link href="https://discord.gg/5rwtq5V">
                <a>Comunidade</a>
            </Link>
            <Link href="/about">
                <a className={props.ativo === 5 ? 'active' : null}>Sobre</a>
            </Link>
            <Link href="/status">
                <a className={props.ativo === 4 ? 'active' : null}>Status</a>
            </Link>
            <Link href="/new">
                <a className={props.ativo === 3 ? 'active' : null}>Novidades</a>
            </Link>
            <Link href="/commands">
                <a className={props.ativo === 2 ? 'active' : null}>Comandos</a>
            </Link>
            <Link href="/">
                <a className={props.ativo === 1 ? 'active' : null}>Inicio</a>
            </Link>
        </MenuNav>);
}


export default Menu;