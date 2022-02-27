import {
  Button,
  Container,
  Grid,
  ImageListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SecondaryContainedButton from "../SeondaryContainedButton";
import ezyhDrawing from "/src/images/ezyh-picture.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
// import { EzyhSVG } from "/src/images/ezyh-drawing.js";

export default function HeroSection() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ m: { md: 7, sm: 6, xs: 5 } }} />
      <Grid container>
        <Grid item lg={5} md={6}>
          <Typography
            variant="h6"
            color="secondary"
            sx={{ fontWeight: { md: 700 } }}
          >
            Hi, my name is
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: { md: 600 },
              fontSize: { xl: "6em", lg: "5em", md: "5em", xs: "4.5em" },
            }}
          >
            Abbas Shah
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            Full-Stack Software Engineer
          </Typography>
          <Box sx={{ m: { md: 2, sm: 1, xs: 1 } }} />

          <Box sx={{ maxWidth: { xl: "70%", lg: "80%" } }}>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: { lg: "1.2em", xs: "1em" } }}
            >
              Also known as EzyhB on GitHub, Youtube and various other
              platforms. My specialties are in Javascript, building full-stack
              applications with React/Nextjs frontend &#38; using Express or
              Nextjs for the backend, along with having multiple unit tests to
              ensure bugfree and easily maintainable code.
            </Typography>
          </Box>
          <Box sx={{ m: { md: 5, sm: 6, xs: 5 } }} />

          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                flexGrow: 2,
                justifyContent: "space-between",
              }}
            >
              <LinkedInIcon color="secondary" />

              <GitHubIcon color="secondary" />

              <YouTubeIcon color="secondary" />

              <EmailIcon color="secondary" />
            </Box>
            <Box
              sx={{ display: "flex", flexGrow: 4, justifyContent: "flex-end" }}
            >
              <Button color="secondary">Contact Me</Button>
              <SecondaryContainedButton text="My Projects" />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          lg={7}
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            // backgroundColor: "red",
          }}
        >
          <ImageListItem sx={{ maxWidth: { xl: "50%", lg: "65%" } }}>
            <img src={ezyhDrawing} alt="ezyh drawing" />
          </ImageListItem>
        </Grid>
      </Grid>
    </Container>
  );
}
//src\images\ezyh-picture.png
