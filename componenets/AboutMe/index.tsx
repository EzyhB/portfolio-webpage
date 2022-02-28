import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

type props = {
  isLight: boolean;
};
export default function AboutMe({ isLight }: props) {
  return (
    <Container maxWidth="xl" id="aboutme">
      <Box sx={{ m: { md: 20, sm: 15, xs: 15 } }} />
      <Grid container>
        <Grid item md={8}>
          <Typography paragraph variant="h2">
            About Me
          </Typography>
          <Typography paragraph variant="subtitle1">
            Along with being a developer, Im also a content creator, business
            aficionado, an artist &#38; a fitness enthusiast. I have a keen
            interest in computational thinking &#38; I love collaborating with
            other developers to make software that is meaningful and fulfills
            the purpose of our user stories.
          </Typography>
          <Typography variant="subtitle1" paragraph>
            I pride myself in writing code that is clean, easy to maintain &#38;
            im always curious about the different ways in which I can make this
            practice more effective. Although I have a very sharp eye for detail
            and can pick at some of the smallest things, I’m very goal
            orientated and like to finish what I started on time, finding the
            perfect balance between the key to my accomplishments
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            sx={{ borderRadius: "40px" }}
          >
            Read More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
