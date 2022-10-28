import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
		fontFamily: 'Rubik, sans-serif',
	},
  palette: {
    primary: {
      main: "#F4A634",
    },
    error: {
      main: "#FA6060",
    },
    info: {
      main: "#2ABBF4",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
