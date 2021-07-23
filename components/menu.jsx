import React from 'react';
import styled from 'styled-components';
import Profile from './profileIcon';
import Link from 'next/link';


const MenuNav = styled.div`
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.0);
    padding:2px;
    display:block;
    width:auto;
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
            <Profile/>
            <Link href="https://discordapp.com/api/oauth2/authorize?client_id=622218589243572224&permissions=8&scope=bot" >
                <a>Incorporar Bot!</a>
            </Link>
            <Link href="https://discord.gg/5rwtq5V">
                <a>Comunidade</a>
            </Link>
            <Link href="/status">
                <a className={props.ativo === 4 ? 'active' : null}>Status</a>
            </Link>
            <Link href="/facetexture">
                <a className={props.ativo === 3 ? 'active' : null}>Face Texture Editor</a>
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
