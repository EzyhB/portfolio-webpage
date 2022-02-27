import { Container, CssBaseline, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { darkTheme, lightTheme } from "../styles/themes";
import Navbar from "../../componenets/Navbar";

interface MyTheme {
  background: string;
  boxShadow: string;
}

// const darkThemeBG = makeStyles((theme: MyTheme) => ({
//   root: {
//     background: "linear-gradient(33.55deg, #984D38 -14.94%, #181E41 82.82%)",
//   },
// }));
// const lightThemeBG = makeStyles((theme: MyTheme) => ({
//   root: {
//     background: "linear-gradient(33.55deg, #984D38 -14.94%, #FFFFFF 82.82%)",
//   },
// }));

export default function IndexPage() {
  const [isLight, setIsLight] = useState(false);
  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <CssBaseline />
      <Container
        maxWidth={false}
        sx={{
          height: "400vh",
          background: isLight
            ? "linear-gradient(33.55deg, #984D38 -14.94%, #FFFFFF 82.82%)"
            : "linear-gradient(33.55deg, #984D38 -14.94%, #181E41 82.82%)",
        }}
      >
        <Navbar />
      </Container>
    </ThemeProvider>
  );
}
