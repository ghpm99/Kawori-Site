import { createGlobalStyle } from 'styled-components'
import { Provider } from 'next-auth/client'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import theme from '../src/theme'
import { storeWrapper } from "../src/store";

const GlobalStyle = createGlobalStyle`
    body{
        border: 0px solid #000;        
        background-color: #36393f;
        background-repeat: no-repeat;
        background-position: center bottom;
        background-attachment: fixed;
        background-size:100%;
        width:100%;
        margin:0px;
    }
        html {
            scroll-behavior: smooth;
    }
`

function App({ Component, pageProps }) {
  return (
    <>
      <Provider session={pageProps.session}>
        <ChakraProvider resetCSS theme={theme}>
          <ColorModeProvider
            options={{
              useSystemColorMode: true,
            }}
          >
            <Component {...pageProps} />
          </ColorModeProvider>
        </ChakraProvider>
      </Provider>
    </>
  )
}

export default storeWrapper.withRedux(App);