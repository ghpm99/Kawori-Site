import React from 'react';
import styled from 'styled-components';

const MenuNav = styled.div`
    overflow: hidden;
    background-color: #333;
    a{
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    &:hover {
        background-color: #ddd;
        color: black;
      }
    &.active {
        background-color: #4CAF50;
        color: white;
      }      
    }
`;

class Menu extends React.Component{
    render(){
      return(
      <MenuNav >
          <a className='active'>Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
      </MenuNav>);
      
    }
}

export default Menu;