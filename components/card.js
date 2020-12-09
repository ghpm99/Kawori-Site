import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
background-color: rgba(255,255,255,0.5);
display:flex;
display: -webkit-flex;
justify-content: center;
align-items: center;
`;

const Image = styled.img`
position: relative;
`;

const Texto = styled.div`
    font-size: 32px;
    text-align:center;
`;

function Card(props){
    return(
        <CardContainer>            
            <Image src={props.imagem} />            
            <Texto>
            {props.texto}
            </Texto>            
        </CardContainer>
    );
}

export default Card;