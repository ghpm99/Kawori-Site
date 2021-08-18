import { Box, Flex, useColorModeValue } from '@chakra-ui/react'

export const ContainerFlex = (props) => {  
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={useColorModeValue('gray.100', 'gray.800')}
      color={useColorModeValue("black","white")}
      {...props}
    />
  )
}

export const ContainerBox = (props) => {
  return(
    <Box
    bg={useColorModeValue('gray.100', 'gray.800')}
    color={useColorModeValue('black', 'white')}
    {...props}
    />
  )
}