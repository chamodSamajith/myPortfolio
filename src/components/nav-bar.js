import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Box from "@mui/material/Box";

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = ["Education", "Experience", "Projects", "Contact"];

  return (
    <>
      {/* AppBar for Desktop and Mobile */}
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          zIndex: 1300,
          backgroundColor: "#333",
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            <Link href="/" color="inherit" underline="none">
              ME
            </Link>
          </Typography>

          {/* Hamburger Menu for Mobile */}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Links for Desktop */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navItems.map((text) => (
              <Link
                key={text}
                href={`/${text.toLowerCase()}`}
                color="inherit"
                underline="none"
                sx={{
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#aaa",
                  },
                }}
              >
                {text}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{
            width: 250,
            backgroundColor: "#333",
            height: "100%",
            marginTop: "18%",
          }}
        >
          <List>
            {navItems.map((text) => (
              <ListItem
                button
                key={text}
                onClick={handleDrawerToggle}
                sx={{ color: "#fff", "&:hover": { backgroundColor: "#444" } }}
              >
                <ListItemText>
                  <Link
                    href={`/${text.toLowerCase()}`}
                    color="inherit"
                    underline="none"
                  >
                    {text}
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default NavBar;
