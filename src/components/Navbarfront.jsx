import * as React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../assets/adminimage/finallogo.png'

const drawerWidth = 240;
const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About Us', link: '/aboutus' },
  { name: 'Our Team', link: '/ourteam' },
  { name: 'Blogs', link: '/blogs' },
  { name: 'Contact us', link: '/contactus' },
  { name: 'Careers', link: '/careers' },
];

function Navbarfront(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
     <a href="https://www.risinginfra.in"><img src={logo} alt="logo" style={{ width: "8em", height: "5em", objectFit: "cover" }}/></a>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton component={RouterLink} to={item.link} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        sx={{
          position:"sticky",
          backgroundColor: '#0B3063',
          transition: 'background-color 0.3s ease-in-out',
          boxShadow: 'none',
          zIndex: 999,
          height: '6em', // Adjust the height of the app bar
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
            <a href="https://www.risinginfra.in"><img src={logo} alt="logo" style={{ width: "8em", height: "5em", objectFit: "cover",margin:"0 0 0 3em" }}/></a>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           <img src={logo} alt="logo" style={{ width: "6em", height: "3em", objectFit: "cover", margin:"1em 0 0 3em" }}/>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, marginRight:"1em" }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={RouterLink}
                to={item.link}
                sx={{ color: '#fff', textTransform: 'none' }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbarfront.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbarfront;
