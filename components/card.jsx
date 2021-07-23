import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
margin-top:15px;
margin-bottom:50px;
margin-right:auto;
margin-left:auto;
max-width:1500px;
display: grid;
grid-gap: 50px;
padding: 10px;
justify-content: center;
align-items: center;
@media (min-width: 900px){
    {        
        grid-template-columns: repeat(2, 1fr);
    }
}
`;

const Image = styled.img`    
    margin-left:auto;
    width:100%;
    
    order:${(props) => {
        return props.align;
    }};    
`;

const Texto = styled.div`
    font-size: 48px;     
    color:white;   
    width:auto;    
    text-align:center;
    
    
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