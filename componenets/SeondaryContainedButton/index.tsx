import { Button, Typography } from "@mui/material";
import React from "react";

type props = {
  text: string;
  goto: string;
};

export default function SecondaryContainedButton({ text, goto }: props) {
  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{ borderRadius: "40px" }}
      disableRipple={true}
      href={goto}
    >
      {text}
    </Button>
  );
}
