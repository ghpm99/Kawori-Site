import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
background-color: rgba(55,55,55,0.9);
display: flex;
justify-content: center;
text-align:center;
margin-bottom:130px;
margin-right:auto;
margin-left:auto;
max-width:1500px;
`;

const Image = styled.img`
    float:${(props) => {
        return props.align;
    }};
    
`;

const Texto = styled.div`
    font-size: 32px;
    text-align:center;
    color:white;
`;

function Card(props){
    return(
        <CardContainer>                        
            <Texto >
            <Image align={props.alinhamento} src={props.imagem}/>
            {props.texto}            
            </Texto>               
        </CardContainer>
    );
}

export default Card;