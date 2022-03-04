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
import Ezyhblk from "/src/images/ezyh-picturecblk.png";
import { AnchorLink } from "gatsby-plugin-anchor-links";

// import { EzyhSVG } from "/src/images/ezyh-drawing.js";

type props = {
  isLight: boolean;
};

export default function HeroSection({ isLight }: props) {
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
              <a href="https://www.linkedin.com/in/ezyh/" target={"_blank"}>
                <LinkedInIcon color="secondary" />
              </a>

              <a href="https://github.com/EzyhB" target={"_blank"}>
                <GitHubIcon color="secondary" />
              </a>

              <a
                href="https://www.youtube.com/channel/UCK79_AS6WNbt2UK3ny2otRA"
                target={"_blank"}
              >
                <YouTubeIcon color="secondary" />
              </a>

              <AnchorLink to="#email-me">
                <EmailIcon color="secondary" />
              </AnchorLink>
            </Box>
            <Box
              sx={{ display: "flex", flexGrow: 4, justifyContent: "flex-end" }}
            >
              {/* <AnchorLink to="#email-me"> */}
              <Button
                color="secondary"
                sx={{ textDecoration: "none", scrollBehavior: "smooth" }}
                href="#email-me"
              >
                Contact Me
              </Button>
              {/* </AnchorLink> */}
              {/* <AnchorLink to="#myprojects"> */}
              <SecondaryContainedButton text="My Projects" goto="#myprojects" />
              {/* </AnchorLink> */}
            </Box>
          </Box>
          <Box sx={{ m: { md: 20, sm: 20, xs: 15 } }} />
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
            <img src={isLight ? Ezyhblk : ezyhDrawing} alt="ezyh drawing" />
          </ImageListItem>
        </Grid>
      </Grid>
    </Container>
  );
}
//src\images\ezyh-picture.png
