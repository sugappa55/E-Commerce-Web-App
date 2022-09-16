import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
import Logo from "../../Assests/flatheads-logo.webp"
import {BsChevronDown,BsSearch,BsBasket3} from "react-icons/bs"
import {IoPersonOutline} from "react-icons/io5"


const drawerWidth = 240;
const navItems = [ 'Women', 'Men',"New","Classic","About","Help"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
            variant="h6"
            component="div"
            sx={{ my:2 }}
          >
            <img src={Logo} alt="" />
          </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <Box >
      <AppBar component="nav" style={{backgroundColor:"white"}}>
        <Toolbar>
          <IconButton
      
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 3, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <BsSearch className='text-xl text-black md:hidden '/>

          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' },m:{xs:"auto",md:0},ml:{md:8},p:0 }}
          >
            <img src={Logo} alt="Logo" />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'none',md:"block" },mx:{md:16} }} >
            <Button sx={{color:"black",fontWeight:"bold"}}>Shop</Button>
            {navItems.map((item,index) => (
              <Button key={item} sx={{ color: 'black',fontWeight:"bold",ml:2 }}>
                {item}  <BsChevronDown className='ml-1'/>
              </Button>
            ))}
          </Box>
         <div className='text-black flex text-xl gap-8 justify-end items-center md:ml-8'>
                    <BsSearch className='text-xl md:block hidden'/>
                    <IoPersonOutline className='text-xl md:block hidden'/>
                    <BsBasket3 className='text-xl'/>
         </div>
        </Toolbar>
      </AppBar>


      <Box component="nav">
        <Drawer
          
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
  
      </Box>
    </Box>
  );
}
