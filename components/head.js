import React from 'react';
import NextHead from 'next/head';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle =  createGlobalStyle`
    body{
        border: 0px solid #000;
        background-image: url('https://i.imgur.com/9DY0rTU.png');
        background-color: #87CEFA;
        background-repeat: no-repeat;
        background-position: center -20%;
        background-size: auto; 
        width: auto;
        height: 100%;
    }
`;

function Head({title}){
    return(
        <>        
        <NextHead>            
            <title>
                {title}
            </title>
            
        </NextHead>
        <GlobalStyle />
        </>
    )
}


export default Head;