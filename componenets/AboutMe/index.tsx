import React, { useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

type props = {
  isLight: boolean;
};
export default function AboutMe({ isLight }: props) {
  const [isReadMore, setIsReadMore] = useState(false);

  var text = isReadMore ? "Read Less" : "Read More";

  return (
    <Container maxWidth="xl" id="aboutme">
      <Box sx={{ m: { md: 20, sm: 15, xs: 15 } }} />
      <Grid container>
        <Grid item md={8}>
          <Typography paragraph variant="h2">
            About Me &#38;
          </Typography>
          <Typography paragraph variant="subtitle1">
            Along with being a developer, I'm also a content creator, business
            aficionado, an artist &#38; a fitness enthusiast. I have a keen
            interest in computational thinking &#38; I love collaborating with
            other developers to make software that is meaningful and fulfils the
            purpose of our user stories.
          </Typography>
          <Typography variant="subtitle1" paragraph>
            I pride myself in writing code that is clean, easy to maintain &#38;
            I'm always curious about the different ways in which I can make this
            practice more effective. Although I have a very sharp eye for detail
            and can pick at some of the smallest things, I’m very goal
            orientated and like to finish what I started on time, finding the
            perfect balance is the key to my accomplishments.
            <br />
            <br />I started my tech journey at SOC in mid-November 2021. With
            very limited pre Bootcamp knowledge from the precourse material,
            given to us by the SOC team.
          </Typography>
          {isReadMore && (
            <Typography paragraph>
              Everything seemed super complex and the thought of giving a
              function a parameter called (x) when defining it and passing it
              parameter (y) when invoking it... seemed like it should be
              illegal. However, I quickly started to notice patterns in how the
              language of programming actually works and got better at using
              Stack Overflow (my dark secret), this goes without saying but I
              was also very dedicated and spent almost all of my days living and
              breathing code, to the point where I'd catch myself trying to
              solve LeetCode questions while I'm getting my REM sleep.
              <br />
              <br />
              It was when this started to become a regular thing and the fact
              that I wasn't getting tired of it, I realised that this definitely
              is something that could be considered a passion of mine, and so I
              decided to give it some extra thought and tried to figure out,
              what exactly about this I enjoyed because being a software
              developer opens up so many paths and possibilities.
              <br />
              <br />
              Although my decision isn't final and I'm always learning new
              things that pique my interest, I've decided to dedicate my time to
              learning about the complex structures that hold together the face
              of our code. The things that happen behind the scenes, the things
              most people often neglect.
              <br />
              <br />
              This has been my tech journey so far, to finish off, I'd like to
              thank the entire team of coaches at SOC:
              <br /> - Chris Meah <br />- Arshi Sheikh <br />- Jordan Linton{" "}
              <br />- Kentleigh English <br />- Liz Kaufman <br />- Helena
              Archer <br />- Jasien Elimy <br />- Dave Adams <br />- Chris
              Miller <br />- Abdullah Chaudhry <br />- Hamzah
              <br />
              <br />
              Each one of your names I have memorised and I value every bit of
              knowledge you have shared with me, and everyone else on the
              Bootcamp. Thanks so much!
              <br />
              <br />
              I'd also like to thank all the team that works behind the scenes
              at SOC!
            </Typography>
          )}
          <Button
            color="secondary"
            variant="contained"
            sx={{ borderRadius: "40px" }}
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {text}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
