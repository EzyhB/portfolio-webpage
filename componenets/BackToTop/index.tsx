import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  ImageList,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import totop from "/src/images/totop.png";

export default function BackToTop() {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        boxShadow: "none",
        display: "flex",

        justifyContent: "end",
        maxWidth: "4rem",
        bottom: "1rem",
        right: "1rem",
      }}
    >
      <AnchorLink to="#navbar">
        <img src={totop} alt="backtotop" />
      </AnchorLink>
    </AppBar>
  );
}
