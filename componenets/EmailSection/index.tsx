import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import {
  AccountCircle,
  EmailRounded,
  MessageRounded,
} from "@mui/icons-material";

export default function EmailSection() {
  return (
    <Container id="email-me">
      <Box sx={{ m: { md: 20, sm: 15, xs: 15 } }} />
      <Typography variant="h2" align="center">
        Contact Me
      </Typography>
      <Container
        maxWidth="sm"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <form
          action="https://formsubmit.co/7415808986e2eb905434df802c087893"
          method="POST"
        >
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Box sx={{ display: "flex", alignItems: "flexend" }}>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="email-name"
                label="Name"
                name="name"
                required
                variant="standard"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flexend" }}>
              <EmailRounded sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="email-email"
                label="Email"
                name="email"
                required
                variant="standard"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flexend" }}>
              <MessageRounded sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="email-message"
                label="Message"
                variant="standard"
                name="message"
                required
                multiline
                rows={5}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "1rem 0 4rem 0",
              }}
            >
              <input
                type="hidden"
                name="_next"
                value="https://a-shah-portfolio.vercel.app/"
              ></input>
              <Button
                variant="contained"
                color="secondary"
                sx={{ borderRadius: "2rem", padding: "0.3rem 2rem" }}
                type="submit"
              >
                Send
              </Button>
            </Box>
          </Box>
        </form>
      </Container>
      {/* <Box sx={{ m: { md: 20, sm: 15, xs: 15 } }}>Thanks for visiting</Box> */}
    </Container>
  );
}
