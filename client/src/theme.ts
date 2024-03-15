
import { PaletteMode } from "@mui/material";

/*Custom Color Shades MUI */
export const tokensDark = {
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
    700: "#312F3B",
    800: "#48494e",
    900: "#1a181e",
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
  },
  negative: {
    800: "#ef2f2f",
  },
};

//reversing dark and  light mode MUI

function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

export const themeSettings = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          // palette values for Dark mode
          primary: {
            ...tokensDark.primary,
            main: tokensDark.grey[900],
            light: tokensDark.primary[400],
          },
          secondary: {
            ...tokensDark.secondary,
            main: tokensDark.secondary[50],
            light: tokensDark.grey[0],
            dark: tokensDark.grey[700],
          },

          text: {
            primary: tokensDark.grey[0],
            secondary: tokensDark.grey[300],
          },
          background: {
            default: tokensDark.grey[900],
            alt: tokensDark.grey[900],
          },
        }
      : {
          // palette values for Light mode
          primary: {
            main: tokensDark.grey[500],
            light: tokensDark.grey[100],
          },
          secondary: {
            main: tokensDark.grey[600],
            light: tokensDark.grey[900],
            dark: tokensDark.grey[500],
          },
          text: {
            primary: tokensDark.grey[900],
            secondary: tokensDark.grey[800],
          },
          background: {
            default: tokensDark.grey[0],
            alt: tokensDark.grey[50],
          },
        }),
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
