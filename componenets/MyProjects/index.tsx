import React from "react";
import { Container, Grid, ImageListItem, Typography, Box } from "@mui/material";

import portfolio from "/src/images/portfolio.png";
import portfolioLight from "/src/images/portfolioLight.png";
import algo from "/src/images/algo.png";
import clanop from "/src/images/clanop.png";
import algo1st from "/src/images/algo1st.png";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const projects = [
  {
    proj_name: "Algorithm Visuliser (v2) Project",
    proj_description: "",
    proj_image: algo,
    link: "https://algorithm-visuliser.vercel.app/",
  },
  {
    proj_name: "Event Manager",
    proj_description: "",
    proj_image: clanop,
    link: "https://team-optimist.netlify.app/",
  },
  {
    proj_name: "Algorithm Visulier (v1) Project",
    proj_description: "",
    proj_image: algo1st,
    link: "https://github.com/EzyhB/algorithm-visuliser",
  },
];

type props = {
  isLight: boolean;
};

export default function MyProejcts({ isLight }: props) {
  return (
    <Container maxWidth="xl" id="myprojects">
      <Box sx={{ m: { md: 30, sm: 25, xs: 20 } }} />
      <Typography variant="h2" align="center" paragraph>
        My Projects
      </Typography>
      <Container maxWidth="md">
        <Typography>
          I'vs also added some of my projects from when I first started coding
          around November 2021, the good ol' days when I was asking Coach Arshi
          why my function isn't doing anything while I'm here not putting any
          return statements in any functions in my Rock Paper Scissors Game.
        </Typography>
      </Container>
      <Box sx={{ m: { md: 10, sm: 8, xs: 8 } }} />
      <Grid container>
        <Grid
          item
          md={6}
          sm={6}
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          <ImageListItem
            sx={{ marginBottom: "1.5rem", marginTop: "1rem", padding: "1rem" }}
          >
            <AnchorLink to="#navbar">
              <img
                src={isLight ? portfolio : portfolioLight}
                style={{ width: "100%" }}
              />
            </AnchorLink>
          </ImageListItem>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Typography paragraph sx={{ marginBottom: "2rem" }} variant="h5">
              My Portfolio
            </Typography>
          </Container>
        </Grid>

        {projects.map((el, index) => (
          <Grid
            item
            md={6}
            sm={6}
            key={index}
            sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          >
            <ImageListItem
              sx={{
                marginBottom: "1.5rem",
                marginTop: "1rem",
                padding: "1rem",
              }}
            >
              <a href={el.link} target={"_blank"}>
                <img src={el.proj_image} style={{ width: "100%" }} />
              </a>
            </ImageListItem>
            <Container sx={{ display: "flex", justifyContent: "center" }}>
              <Typography paragraph sx={{ marginBottom: "2rem" }} variant="h5">
                {el.proj_name}
              </Typography>
            </Container>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
