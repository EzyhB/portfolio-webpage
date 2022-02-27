import { Button, Typography } from "@mui/material";
import React from "react";

type props = {
  text: string;
};

export default function SecondaryContainedButton({ text }: props) {
  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{ borderRadius: "40px" }}
      disableRipple={true}
    >
      {text}
    </Button>
  );
}
