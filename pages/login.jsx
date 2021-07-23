import Head from '../components/head';
import Menu from '../components/menu';
import { signIn, signOut, useSession } from 'next-auth/client'


function Main(){
    return(
        <>
            <Head title='Kawori bot' /> 
            <Menu  ativo={3}/>
            <Login/>

        </>
    )
}

export default Main;

function Login(){
    const [ session, loading ] = useSession();

    return <>
    {!session && <>
      Deslogado <br/>
      <button onClick={() => signIn('discord')}>Logar</button>
    </>}
    {session && <>
     Logado como {session.user.name}<br/>
      <button onClick={() => signOut()}>Deslogar</button>
    </>}
  </>
    
}