import React from 'react';
import NextHead from 'next/head';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle =  createGlobalStyle`
    body{
        border: 0px solid #000;
        background-image: url('https://i.imgur.com/6NHnrDS.png');
        background-color: #ffbdba;
        background-repeat: no-repeat;
        background-position: left 15%;
        background-size: cover; 
        width: auto;
        height: auto;
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