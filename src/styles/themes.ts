import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#181E41",
      contrastText: "#fff",
    },
    secondary: {
      main: "#EB785B",
      contrastText: "#fff",
    },
  },
  // typography: {
  //   h1: {
  //     htmlFontSize: 16,
  //     px
  //   },
  // },
});
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffff",
    },
    secondary: {
      main: "#EB785B",
      contrastText: "#fff",
    },
  },
});

//linear-gradient(33.55deg, #984D38 -14.94%, #181E41 82.82%)
