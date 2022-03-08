import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  ImageListItem,
  Typography,
} from "@mui/material";

import bootstrap from "/src/images/bootstrap.png";
import css3 from "/src/images/css3.png";
import docker from "/src/images/docker.png";
import figma from "/src/images/figma.png";
import git from "/src/images/git.png";
import heroku from "/src/images/heroku.png";
import html5 from "/src/images/html5.png";
import jest from "/src/images/jest.png";
import js from "/src/images/js.png";
import mui from "/src/images/mui.png";
import nextjs from "/src/images/nextjs.png";
import nextjswhite from "/src/images/nextjswhite.png";
import node from "/src/images/node.png";
import python from "/src/images/python.png";
import react from "/src/images/react.png";
import rtl from "/src/images/rtl.png";
import sql from "/src/images/sql.png";
import ts from "/src/images/ts.png";
import gatsby from "/src/images/gatsby.png";
import mongo from "/src/images/mongo.png";
import sass from "/src/images/sass.png";
import ccc from "/src/images/ccc.png";
import cypress from "/src/images/cypress.png";
import csharp from "/src/images/csharp.png";

const skills = [
  { name: "HTML5", image: html5 },
  { name: "CSS3", image: css3 },
  { name: "JS", image: js },
  { name: "Typescript", image: ts },
  { name: "React", image: react },
  { name: "Jest", image: jest },
  { name: "MySQL", image: sql },
  { name: "Docker", image: docker },
  { name: "Node", image: node },
  { name: "Heroku", image: heroku },
  { name: "Git", image: git },
  { name: "Figma", image: figma },
  { name: "RTL", image: rtl },
  { name: "MUI", image: mui },
  { name: "BootStrap", image: bootstrap },
  { name: "Python", image: python },
  { name: "Gatsby", image: gatsby },
  { name: "Cypress", image: cypress },
  { name: "SASS", image: sass },
];

const learning = [
  { name: "MongoDB", image: mongo },
  { name: "C++", image: ccc },
  { name: "C Sharp", image: csharp },
];

type props = {
  isLight: boolean;
};

export default function Skills({ isLight }: props) {
  return (
    <Container id="skills">
      <Box sx={{ m: { md: 30, sm: 25, xs: 20 } }} />
      <Typography variant="h2" align="center">
        Tech Stack
      </Typography>
      <Box sx={{ m: { md: 10, sm: 8, xs: 8 } }} />
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        {skills.map((el, index) => (
          <Grid
            item
            md={2}
            sm={3}
            xs={4}
            key={index}
            sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          >
            <ImageListItem sx={{ marginBottom: "1.5rem", marginTop: "1rem" }}>
              <img src={el.image} style={{ width: "100%", height: "6rem" }} />
            </ImageListItem>
            <Container sx={{ display: "flex", justifyContent: "center" }}>
              <Typography paragraph sx={{ marginBottom: "2rem" }}>
                {el.name}
              </Typography>
            </Container>
          </Grid>
        ))}
        <Grid
          item
          md={2}
          sm={3}
          xs={4}
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          <ImageListItem sx={{ marginBottom: "1.5rem", marginTop: "1rem" }}>
            <img
              src={isLight ? nextjs : nextjswhite}
              style={{ width: "100%", height: "6rem" }}
            />
          </ImageListItem>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Typography paragraph sx={{ marginBottom: "2rem" }}>
              Nextjs
            </Typography>
          </Container>
        </Grid>
      </Grid>
      <Box sx={{ m: { md: 20, sm: 15, xs: 15 } }} />
      <Typography variant="h2" align="center">
        Learning
      </Typography>
      <Box sx={{ m: { md: 10, sm: 8, xs: 8 } }} />
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        {learning.map((el, index) => (
          <Grid
            item
            md={2}
            sm={3}
            xs={4}
            key={index}
            sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          >
            <ImageListItem sx={{ marginBottom: "1.5rem", marginTop: "1rem" }}>
              <img src={el.image} style={{ width: "100%", height: "6rem" }} />
            </ImageListItem>
            <Container sx={{ display: "flex", justifyContent: "center" }}>
              <Typography paragraph sx={{ marginBottom: "2rem" }}>
                {el.name}
              </Typography>
            </Container>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
