import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from "../../Assests/flatheads-logo.webp"
import {BsChevronDown,BsSearch,BsBasket3} from "react-icons/bs"
import {IoPersonOutline,IoMenuOutline} from "react-icons/io5"
import {AiOutlineClose} from "react-icons/ai"
import {GrNext} from "react-icons/gr"
import { Link, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
const drawerWidth = 240;
const navItems = [ 'Women', 'Men',"New!","Classic","About","Help"];

 function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate=useNavigate()

 /**
  * When the drawer is open, clicking the hamburger icon will close the drawer. When the drawer is
  * closed, clicking the hamburger icon will open the drawer.
  */
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} style={{boxShadow:"none"}} >
      <div className="flex py-2  items-center">
        <div><IoPersonOutline className='mx-2 text-xl'/></div>
      <div className='font-bold flex-1  text-xl'>  <Link to="/login">Login</Link></div>
        <div onClick={handleDrawerToggle}><AiOutlineClose className='text-xl mr-2'/></div>
      </div>
      <Divider />
      <List>
      <ListItemButton >
             <Link to="/collections/all"> <ListItemText primary={"Shop"} /> </Link>
            </ListItemButton>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton className='flex justify-between' >
            <Link to="/collections/all"  className='link'>
              <ListItemText primary={item} /><GrNext/>
            </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <div style={{padding:0}} >
      <AppBar component="nav" style={{backgroundColor:"white",pdding:0,height:"4rem"}}>
        <Toolbar>
          
          <IconButton sx={{display:{md:"none"}}} onClick={handleDrawerToggle}>
          <IoMenuOutline className=' text-3xl mr-3 text-black' />

          </IconButton>
          <BsSearch className='text-xl text-black md:hidden '/>

          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' },m:{xs:"auto",md:0},ml:{md:6},p:0 }}
          >
            <img src={Logo} alt="Logo" className='cursor-pointer' onClick={()=>navigate("/")}/>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'none',md:"block" },mx:{md:"5vw"} }} >
            <Button sx={{color:"black",fontWeight:"bold"}}><Link to="/collections/all">Shop</Link></Button>
            {navItems.map((item,index) => (
              <Button key={item} disableFocusRipple  sx={{ color: 'black',fontWeight:"bold",ml:1.5 }}>
               <Link to={`${index<=3?"/collections/all":item}`} className='link'> {item}  <BsChevronDown className='ml-1'/></Link>
              </Button>
            ))}
          </Box>
         <div className='text-black flex text-xl  gap-6 xl:gap-12 justify-end items-center md:ml-[8vw] 2xl:ml-[12vw]'>
                    <Link to="/"><BsSearch className='text-xl md:block hidden'/></Link>
                   <Link to="/login">
                    <IoPersonOutline className='text-xl md:block hidden'/>
                   </Link>
                    <Link to="/usercart" className="flex items-center gap-1">
                    <BsBasket3 className='text-xl'/>

                    
                    <div className='bg-gray-200 font-semibold rounded-[50%] text-center w-6 text-sm p-1'>1</div>
                    </Link>
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
      <Box component="main" >
        <Toolbar />
      </Box>
    </div>
  );
}
export default React.memo(Navbar)