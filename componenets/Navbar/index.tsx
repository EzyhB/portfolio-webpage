import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SecondaryContainedButton from "../../componenets/SeondaryContainedButton";
import ThemeSwitch from "../../componenets/ThemeSwitch";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const pages = [
  { name: "Home", ref: "navbar" },
  { name: "About", ref: "aboutme" },
  { name: "Skills", ref: "skills" },
  { name: "Projects", ref: "myprojects" },
];

type props = {
  setsIsLight: Function;
  issLight: boolean;
};

const Navbar = ({ setsIsLight, issLight }: props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      id="navbar"
      sx={{ boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <AnchorLink to={"#" + page.ref}>
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: issLight ? "black" : "white",
                    display: "block",
                    margin: { lg: "3em", md: "2em" },
                  }}
                >
                  {page.name}
                </Button>
              </AnchorLink>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <AnchorLink to={"#" + page.ref}>
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </AnchorLink>
              ))}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Contact Me</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <ThemeSwitch onClick={() => setsIsLight(!issLight)} />
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <ThemeSwitch onClick={() => setsIsLight(!issLight)} />
            <Tooltip title="Contact Me">
              <IconButton sx={{ p: 0 }}>
                <AnchorLink to="#email-me">
                  <SecondaryContainedButton text="Contact Me" />
                </AnchorLink>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
