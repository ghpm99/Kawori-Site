import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
background-color: rgba(55,55,55,0.9);
margin-top:30px;
margin-bottom:100px;
margin-right:auto;
margin-left:auto;
max-width:1500px;

display: -webkit-flex;
display: flex;
-webkit-align-items: center;
align-items: center;
-webkit-justify-content: flex-end;
justify-content: flex-end;


`;

const Image = styled.img`
    margin-left:auto;
    order:${(props) => {
        return props.align;
    }};    
`;

const Texto = styled.div`
    font-size: 48px;     
    color:white;   
    width:500px;    
`;


function Card(props){
    return(
        <CardContainer>   
                <Image align={props.alinhamento} src={props.imagem}/>
                <Texto >                
                    {props.texto}         
                </Texto>     
        </CardContainer>
    );
}

export default Card;