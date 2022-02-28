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
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Box sx={{ display: "flex", alignItems: "flexend" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField id="email-name" label="Name" variant="standard" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flexend" }}>
            <EmailRounded sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField id="email-email" label="Email" variant="standard" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flexend" }}>
            <MessageRounded sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="email-message"
              label="Message"
              variant="standard"
              multiline
              rows={5}
            />
          </Box>
        </Box>
      </Container>
      {/* <Box sx={{ m: { md: 20, sm: 15, xs: 15 } }}>Thanks for visiting</Box> */}
    </Container>
  );
}
