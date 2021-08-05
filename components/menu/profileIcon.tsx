import { Avatar, Button, Menu as MenuChakra, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, useColorModeValue } from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/client';
import React from 'react';
import useTranslation from '../../intl/useTranslation';

function Icon() {
    const [session] = useSession();
    const { t } = useTranslation();
    const colorText = useColorModeValue("black", "white");
    return (
        <MenuChakra>
            {!session && <>
                <Button as={'a'}
                    fontSize={'sm'}
                    fontWeight={400}
                    variant={'link'}
                    href={'#'}
                    onClick={() => signIn('discord')}>
                    Logar
                </Button>

            </>}
            {session && <>
                <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar size={'sm'} src={session.user.image} />
                </MenuButton>
                <MenuList color={colorText}>
                    <MenuGroup title={t("menu_profile_button_01")}>
                        <MenuItem as="a" href="/account"> {t("menu_profile_button_02")}</MenuItem>
                        <MenuItem>{t("menu_profile_button_03")}</MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuItem onClick={() => signOut()}>{t("menu_profile_button_04")}</MenuItem>
                </MenuList>
            </>}
        </MenuChakra>
    );
}

export default Icon;