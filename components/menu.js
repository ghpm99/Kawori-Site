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
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    &:hover {
        background-color: #ddd;
        color: black;
      }
    &.active {
        background-color: #E59795;

        color: #E1DDDD;
      }      
    }
`;


function Menu(props){
    
    return(
        <MenuNav >
            
            <Link href="/about">
                <a className={props.ativo === 4 ? 'active' : null}>Sobre</a>
            </Link>
            <Link href="/contact">
                <a className={props.ativo === 3 ? 'active' : null}>Contato</a>
            </Link>
            <Link href="/new">
                <a className={props.ativo === 2 ? 'active' : null}>Novidades</a>
            </Link>
            <Link href="/">
                <a className={props.ativo === 1 ? 'active' : null}>Inicio</a>
            </Link>
        </MenuNav>);
}


export default Menu;