import {
  Button,
  Container,
  Grid,
  IconButton,
  ImageListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import SecondaryContainedButton from "../SeondaryContainedButton";
import ezyhDrawing from "/src/images/ezyh-picture.png";

export default function HeroSection() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ m: { md: 7, sm: 6, xs: 5 } }} />
      <Grid container>
        <Grid item md={5}>
          <Typography
            variant="h6"
            color="secondary"
            sx={{ fontWeight: { md: 700 } }}
          >
            Hi, my name is
          </Typography>
          <Typography variant="h1" sx={{ fontWeight: { md: 600 } }}>
            Abbas Shah
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            Full-Stack Software Engineer
          </Typography>
          <Box sx={{ m: { md: 2, sm: 1, xs: 1 } }} />
          <Box sx={{ maxWidth: { lg: "70%" } }}>
            <Typography>
              Also known as EzyhB on GitHub, Youtube and various other
              platforms. My specialties are in Javascript, building full-stack
              applications with React/Nextjs frontend &#38; using Express or
              Nextjs for the backend, along with having multiple unit tests to
              ensure bugfree and easily maintainable code.
            </Typography>
          </Box>
          <Box>
            <Box>
              <IconButton></IconButton>
            </Box>
            <Box>
              <Button color="secondary">Contact Me</Button>
              <SecondaryContainedButton text="My Projects" />
            </Box>
          </Box>
        </Grid>
        <Grid item md={7} sx={{ display: "flex", justifyContent: "center" }}>
          <ImageListItem>
            <img src={ezyhDrawing} alt="ezyh drawing" />
          </ImageListItem>
        </Grid>
      </Grid>
    </Container>
  );
}
//src\images\ezyh-picture.png
