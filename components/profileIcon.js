import { signIn, useSession } from 'next-auth/client'
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Image = styled.img`    
    margin-left:auto;
    width:32px;
    height:32px;
    border-radius:50%
`;

function Icon(){
    const [ session] = useSession();    
    return(
        <>
        {!session && <>            
                <a onClick={() => signIn('discord')}>Logar</a>
        </>}
        {session && <>            
            <a>
            <Link href="/account">
                <Image src={session.user.image}/>
            </Link>
            </a>
        </>}
        </>
    );
}

export default Icon;