import React from 'react';
import NextHead from 'next/head';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle =  createGlobalStyle`
    body{
        border: 0px solid #000;        
        background-color: #36393f;
        background-repeat: no-repeat;
        background-position: center bottom;
        background-attachment: fixed;
        background-size:100%;
        width:100%;
        margin:0px;
    }
    html {
        scroll-behavior: smooth;
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