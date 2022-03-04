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
import { ImageListItem } from "@mui/material";
import { maxWidth } from "@mui/system";
import scrollTo from "gatsby-plugin-smoothscroll";

import logoLight from "/src/images/aShahLight.png";
import logoDark from "/src/images/aShahDark.png";

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

  let logo = issLight ? logoDark : logoLight;
  return (
    <AppBar
      position="static"
      color="transparent"
      id="navbar"
      sx={{ boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ImageListItem
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              maxWidth: "10rem",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "100%", height: "auto", margin: "1rem 0" }}
            />
          </ImageListItem>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <ImageListItem
              component="div"
              sx={{
                mr: 2,

                maxWidth: "7rem",
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{ width: "100%", height: "auto", margin: "1rem 0" }}
              />
            </ImageListItem>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => {
                  handleCloseNavMenu();
                  scrollTo("#" + page.ref);
                }}
                sx={{
                  my: 2,
                  color: issLight ? "black" : "white",
                  display: "block",
                  margin: { lg: "3em", md: "2em" },
                }}
              >
                {page.name}
              </Button>
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
                    <Typography
                      textAlign="center"
                      color={issLight ? "black" : "white"}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                </AnchorLink>
              ))}
              <AnchorLink to={"#email-me"}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    color={issLight ? "black" : "white"}
                  >
                    Contact Me
                  </Typography>
                </MenuItem>
              </AnchorLink>
              <MenuItem onClick={handleCloseNavMenu}>
                <ThemeSwitch onClick={() => setsIsLight(!issLight)} />
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <ThemeSwitch onClick={() => setsIsLight(!issLight)} />
            <Tooltip title="Contact Me">
              <IconButton sx={{ p: 0 }}>
                {/* <AnchorLink to="#email-me"> */}
                <Button
                  onClick={() => scrollTo("#email-me")}
                  variant="contained"
                  color="secondary"
                  sx={{ borderRadius: "40px" }}
                >
                  Contact Me
                </Button>
                {/* </AnchorLink> */}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
