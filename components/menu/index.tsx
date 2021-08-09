import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box, Flex,
  HStack, IconButton, Link as LinkChakra, Stack, useColorMode, useColorModeValue, useDisclosure
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import useTranslation from '../../intl/useTranslation';
import Icon from './profileIcon';
import { settingsUpdateLang } from '../../src/store/actions/users/settings'

const Links = [
  { text: 'menu_button_01', url: '/' },
  { text: 'menu_button_02', url: '/commands' },
  { text: 'menu_button_03', url: '/facetexture' },
  { text: 'menu_button_04', url: '/status' },
  { text: 'menu_button_05', url: 'https://discord.gg/5rwtq5V' },
  { text: 'menu_button_06', url: 'https://discordapp.com/api/oauth2/authorize?client_id=622218589243572224&permissions=8&scope=bot' }
];

const NavLink = (props) => (

  <NextLink href={props.link.url}>
    <LinkChakra
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.100', 'gray.900'),
      }}>
      {props.children}
    </LinkChakra>
  </NextLink>
);

export default function Menu() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootStateOrAny) => state.settings);  
  const clicou = () => {
    if (language === "ptbr")
      dispatch(settingsUpdateLang("en"));
    else
      dispatch(settingsUpdateLang("ptbr"));
  }

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.800')} px={4} >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen} />
        <HStack spacing={8} alignItems={'center'}>
          <HStack
            as={'nav'}
            spacing={4}
            color={useColorModeValue('black', 'white')}
            display={{ base: 'none', md: 'flex' }}>
            {Links.map((a) => (
              <NavLink link={a} key={a.text}>{t(a.text)}</NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <LinkChakra
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('gray.100', 'gray.900'),
            }}
            color={useColorModeValue('black', 'white')}
            onClick={clicou}>
            {language}
          </LinkChakra>

          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={colorMode == "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
          <Icon />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4} color={useColorModeValue('black', 'white')}>
            {Links.map((a) => (
              <NavLink link={a} key={a.text}>{t(a.text)}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}