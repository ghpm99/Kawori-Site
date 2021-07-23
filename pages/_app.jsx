import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Provider } from 'next-auth/client'
import { ModalProvider } from 'styled-react-modal'

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

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider session={pageProps.session}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </ThemeProvider>
      </Provider>
    </>
  )
}