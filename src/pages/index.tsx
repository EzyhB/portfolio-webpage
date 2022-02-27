import { Container, CssBaseline, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";

import { useState } from "react";
import { darkTheme, lightTheme } from "../styles/themes";
import Navbar from "../../componenets/Navbar";
import HeroSection from "../../componenets/HeroSection";
import AboutMe from "../../componenets/AboutMe";
import Skills from "../../componenets/Skills";

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
        <HeroSection />
        <AboutMe />
        <Skills isLight={isLight} />
      </Container>
    </ThemeProvider>
  );
}
