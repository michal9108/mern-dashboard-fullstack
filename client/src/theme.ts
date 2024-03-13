import ModeTypes from "../shared/types";
import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey, deepPurple } from '@mui/material/colors';
/*Color Shades*/

interface TokensLight {
  grey?: Record<string, string>;
  primary?: Record<string, string>;
  secondary?: Record<string, string>;
 

}
export const tokensDark= {
  grey: {
    0: "#ffffff", // manually adjusted
    10: "#f6f6f6", // manually adjusted
    50: "#f0f0f0", // manually adjusted
    100: "#f0f0f3",
    200: "#e1e2e7",
    300: "#d1d3da",
    400: "#c2c5ce",
    500: "#b3b6c2",
    600: "#8f929b",
    700: "#6b6d74",
    800: "#48494e",
    900: "#242427",
  },
  primary: {
    // light green
    100: "#d0fcf4",
    200: "#a0f9e9",
    300: "#71f5de",
    400: "#41f2d3",
    500: "#51f5ac",
    600: "#191F45", // manually adjusted
    700: "#0b8f78",
    800: "#076050",
    900: "#043028",
  },
  secondary: {
    // yellow
    50: "#f0f0f0", // manually adjusted
    100: "#fcf0dd",
    200: "#fae1bb",
    300: "#f7d299",
    400: "#f5c377",
    500: "#f2b455",
    600: "#c29044",
    700: "#916c33",
    800: "#614822",
    900: "#302411",
  },
  tertiary: {
    // purple
    500: "#8884d8",
  },
  background: {
    light: "#c41b83",
    main: "#1a181e",
  },
};


export const themeSettings = (mode: PaletteMode) => ({
  
    palette: {
      mode,
      ...(mode === "dark"
          ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[300],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[500],
            },
            tertiary: {
              ...tokensDark.tertiary,
            },
            grey: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.background.main,
              light: tokensDark.background.light,
            },
          }
          : {
            // palette values for light mode
            primary: amber,
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }),
        
              
          //   }
          // : {
          //     // palette values for light mode
          //     primary: {
          //       ...tokensLight.primary,
          //       main: tokensDark.grey[50],
          //       light: tokensDark.grey[100],
          //     },
          //     secondary: {
          //       ...tokensLight.secondary,
          //       main: tokensDark.secondary[600],
          //       light: tokensDark.secondary[700],
          //     },
          //     neutral: {
          //       ...tokensLight.grey,
          //       main: tokensDark.grey[500],
          //     },
          //     background: {
          //       default: tokensDark.grey[0],
          //       alt: tokensDark.grey[50],
          //     },
          //   }),
    },

    typography: {
      fontFamily: ["Roboto", "Poppins"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Roboto", "Poppins"].join(","),
        fontSize: 32,
      },
      h2: {
        fontFamily: ["Roboto", "Poppins"].join(","),
        fontSize: 24,
        fontWeight: 800,
      },
      h3: {
        fontFamily: ["Roboto", "Poppins"].join(","),
        fontSize: 20,
        fontWeight: 800,
        color: "#e1e2e7",
      },
      h4: {
        fontFamily: ["Roboto", "Poppins"].join(","),
        fontSize: 15,
        fontWeight: 700,
        color: "#ccc",
      },
      h5: {
        fontFamily: ["Roboto", "Poppins"].join(","),
        fontSize: 12,
        fontWeight: 400,
        color: "#b3b6c2",
      },
      h6: {
        fontFamily: ["Roboto", "Poppins"].join(","),
        fontSize: 10,
        color: "#6b6d74",
      },
    },
  });
