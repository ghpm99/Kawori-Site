import React from 'react';
import NextHead from 'next/head';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle =  createGlobalStyle`
    body{
        border: 0px solid #000;        
        background-color: #24252a;
        background-repeat: no-repeat;
        background-position: center bottom;
        background-attachment: fixed;
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