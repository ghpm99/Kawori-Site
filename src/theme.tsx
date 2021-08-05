import theme, { Theme } from '@chakra-ui/theme';
import { mode, Styles } from '@chakra-ui/theme-tools';

//grayDiscord: "#36393f"

const styles: Styles = {
  ...theme.styles,
  global: (props) => ({
    ...theme.styles.global,
    width:"100%",
    backgroundSize:"100%",
    backgroundColor:"#36393f",
    border:"0px solid #000",
    margin:"0px",
    fontFamily: "body",
    fontWeight: "light",
    color: mode("gray.100", "whiteAlpha.900")(props),
    bg: mode("gray.700", "#36393f")(props),
  }),
};

const customTheme: Theme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: `"Source Sans Pro",${theme.fonts.body}`,
    heading: `"Source Sans Pro",${theme.fonts.heading}`,
  },
  colors: {
    ...theme.colors,
    black: "#131217",
    gray: {
      50: "#F1F2F3",
      100: "#D9DADE",
      200: "#C0C3C9",
      300: "#A7ABB4",
      400: "#8E949E",
      500: "#767C89",
      600: "#5E636E",
      700: "#474B52",
      800: "#36393f",
      900: "#18191B",
    },
  },
  config: {
    ...theme.config,
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  styles,
};

export default customTheme;