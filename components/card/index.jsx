import { Box, Flex, Grid, Image, Text, useColorModeValue } from '@chakra-ui/react';
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


function Card(props) {
    return (
        <Flex 
        bg={useColorModeValue("gray.100", "gray.800")} 
        color={useColorModeValue("black", "white")}                
        alignItems="center">

            <Image 
            order={props.alinhamento}
            src={props.imagem}             
            />
            <Text fontSize="5xl">
                {props.texto}
            </Text>

        </Flex>
    );
}

export default Card;