// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { Link } from 'react-router-dom';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#212121', // Navbar background color (extracted from screenshot)
//     },
//     text: {
//       primary: '#FFFFFF', // Text color
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           '&:hover': {
//             backgroundColor: '#424242', // Hover effect background color
//           },
//         },
//       },
//     },
//     MuiMenu: {
//       styleOverrides: {
//         paper: {
//           backgroundColor: '#212121', // Menu background color
//           color: '#FFFFFF', // Menu text color
//         },
//       },
//     },
//   },
// });
// const pages = [
//   { name: 'Blog', link: '/' },
//   { name: 'About US', link: '/aboutUs' },
//   { name: 'Contact US', link: '/contactUs' },
//   { name: 'Privacy Policy', link: '/PrivacyPolicy' },
//   { name: 'Terms and Conditions', link: '/Terms-and-Conditions' }
// ];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
// function TopNavBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };
//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };
//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   return (
//     <ThemeProvider theme={theme}>
//       <AppBar position="fixed">
//         <Container maxWidth="xl">
//           <Toolbar disableGutters sx={{ justifyContent: 'space-between', paddingX: '16px' }}>
//             {/* Logo and Menu Icon for mobile */}
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
//               {/* <Typography
//               variant="h6"
//               noWrap
//               component={Link}
//               to="/"
//               sx={{
//                 mr: 2,
//                 display: { xs: 'none', md: 'flex' },
//                 fontFamily: 'monospace',
//                 fontWeight: 700,
//                 letterSpacing: '.3rem',
//                 color: 'inherit',
//                 textDecoration: 'none',
//               }}
//             >
//               LOGO
//             </Typography> */}
//               {/* Navigation links for desktop */}
//               <img src="CLogo.png" alt="" style={{ height: "60px", marginRight: "20px" }} />
//               <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '16px' }}>
//                 {pages.map((page) => (
//                   <Button
//                     key={page.name}
//                     component={Link}
//                     to={page.link}
//                     onClick={handleCloseNavMenu}
//                     sx={{ color: 'white' }}
//                   >
//                     {page.name}
//                   </Button>
//                 ))}
//               </Box>
//             </Box>
//             {/* User avatar and settings */}
//             {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <Box sx={{ flexGrow: 1 }} />
//               <Tooltip title="Open settings">
//                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                   <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//                 </IconButton>
//               </Tooltip>
//               <Menu
//                 sx={{ mt: '45px' }}
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               >
//                 {settings.map((setting) => (
//                   <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                     <Typography textAlign="center">{setting}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box> */}
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </ThemeProvider>
//   );
// }
// export default TopNavBar;




import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
  CardMedia,
  Box
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
// import LoginButton from "../Button/LoginButton"; // Import the LoginButton component

const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
  },
  logo: {
    flexGrow: 1,
    cursor: "pointer",
    color: "white",
    fontFamily: "serif",
    display: "flex",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: "700",
    marginLeft: theme.spacing(6),
    padding: "7px",
    boxSizing: "border-box",
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      color: "white",
      backgroundColor: "#c80815",
      borderRadius: "4px",
      textDecoration: "none"
    },
  },
  appbar: {
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(70px)",
    backgroundColor: "#212121",
  },
  drawerPaper: {
    width: "250px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  logoImage: {
    width: "100px", // Adjust the width as needed
    height: "auto", // Maintain aspect ratio
    marginRight: theme.spacing(0), // Add some space between logo image and text
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },

}));

const TopNavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <div>
      <Divider />
      <List>
        <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
          <ListItemText primary="BLOG" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/aboutUs"
          onClick={handleDrawerToggle}
        >
          <ListItemText primary="ABOUT" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/contactUs"
          onClick={handleDrawerToggle}
        >
          <ListItemText primary="CONTACT" />
        </ListItem>
        <ListItem button component={Link} to="/PrivacyPolicy" onClick={handleDrawerToggle}>
          <ListItemText primary="PRIVACY POLICY" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/Terms-and-Conditions"
          onClick={handleDrawerToggle}
        >
          <ListItemText primary="TERMS AND CONDITIONS" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div style={{ padding: "0px", backgroundColor: "#212121" }}>
      <AppBar
        position="fixed"
        className={classes.appbar}
        style={{ borderRadius: "0px" }}
      >
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
            <img src="CLogo.png" alt="" style={{ height: "50px" }} />
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                classes={{ paper: classes.drawerPaper }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                BLOG
              </Link>
              <Link to="/aboutUs" className={classes.link}>
                ABOUT US
              </Link>
              <Link to="/contactUs" className={classes.link}>
                CONTACT US
              </Link>
              <Link to="/PrivacyPolicy" className={classes.link}>
                PRIVACY POLICY
              </Link>
              <Link to="/Terms-and-Conditions" className={classes.link}>
                TERMS AND CONDITIONS
              </Link>
              {/* <LoginButton /> Add the LoginButton component here */}
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default TopNavBar;
