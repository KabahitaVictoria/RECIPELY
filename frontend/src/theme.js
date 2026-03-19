// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `'Raleway', 'Poppins', sans-serif`, // default body font

    // Headings
    h1: {
      fontFamily: `'Poppins', sans-serif`,
      fontWeight: 900,
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: `'Poppins', sans-serif`,
      fontWeight: 800,
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: `'Poppins', sans-serif`,
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: `'Poppins', sans-serif`,
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h5: {
      fontFamily: `'Poppins', sans-serif`,
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: `'Poppins', sans-serif`,
      fontWeight: 500,
      lineHeight: 1.4,
    },

    // Paragraphs / body text
    body1: {
      fontFamily: `'Raleway', sans-serif`,
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: `'Raleway', sans-serif`,
      fontWeight: 400,
      lineHeight: 1.6,
    },

    // Buttons
    button: {
      fontFamily: `'Poppins', sans-serif`,
      fontWeight: 600,
      textTransform: "none",
    },

    // Captions / small text
    caption: { fontFamily: `'Raleway', sans-serif`, fontWeight: 400 },
  },
});

export default theme;