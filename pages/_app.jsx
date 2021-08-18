import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { Provider } from 'next-auth/client';
import { storeWrapper } from "../src/store";
import theme from '../src/theme';

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