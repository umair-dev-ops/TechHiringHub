// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     Button,
//     makeStyles,
//     Avatar,
//   } from "@material-ui/core";
//   import Stack from '@mui/material/Stack';
//   //import Button from '@mui/material/Button';
//   import { AiOutlineHome} from 'react-icons/ai';
//   import{RiLogoutBoxRLine} from 'react-icons/ri';
//   import {IoIosLogOut} from 'react-icons/io';
//   import {MdLogout} from 'react-icons/md';
//   import {CgProfile} from 'react-icons/cg';
//   import {FiHome} from 'react-icons/fi';
  
//   import { useHistory } from "react-router-dom";
//   import logo from "../Logo/logo_white.png";
//   import Image from "material-ui-image";
  
//   //import isAuth, { userType } from "../lib/isAuth";
  
//   const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   }));
  
//   const NavbarH = (props) => {
//     const classes = useStyles();
//     let history = useHistory();
  
//     const handleClick = (location) => {
//       console.log(location);
//       history.push(location);
//     };
  
//     return (
//         <>
        
//       <AppBar  >
//          {/* <Toolbar>
//           <img src="transparent.png" alt="logo" className={classes.logo} />
//         </Toolbar> */}
//         <Toolbar color="DC1A22">
        
//           <Typography  variant="h6" className={classes.title}>
//             <img src={logo} alt="logo" className="w-25"/>
//           </Typography>
          
//               <>
//                 <Button color="inherit" onClick={() => handleClick("/home")}>
//                   <FiHome  size={28}></FiHome>
//                 </Button>
//                 <Button
//                   color="inherit"
//                   onClick={() => handleClick("/applications")}
//                 >
//                   Applications
//                 </Button>
//                 <Button color="inherit" onClick={() => handleClick("/profile")}>
//                   <CgProfile size={28}></CgProfile>
//                 </Button>
//                 <Button color="inherit" onClick={() => handleClick("/logout")}>
//                   <MdLogout size={28}></MdLogout>
//                 </Button>
//                 <Stack spacing={2} direction="row">
//       <Button variant="text">Text</Button>
//       <Button variant="contained"  >Contained</Button>
//       <Button variant="outlined"  color="success">Outlined</Button>
//     </Stack>
//               </>
            
//         </Toolbar>
//       </AppBar>
          
//       </>
//     );
//   };
  
//   export default NavbarH;
  
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import logo from "../Logo/logo_white.png";
import {Button ,makeStyles} from "@material-ui/core";
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useHistory } from "react-router-dom";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import './NavbarH.css'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;




const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));
     
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 100,
  },
}));

export default function ProminentAppBar() {
 const history = useHistory();
    const classes = useStyles();
    const mystyle = {
      width:"210%",
    };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="static">
        <StyledToolbar className="container">
        <Typography  variant="h6" className={classes.title}>
             {/* <img src={logo} alt="logo" className="w-25-i mt-1 ms-1-i"/> */}
             <h3 onClick={()=>{history.push('/main')}} style={{marginTop:"1px",marginBottom:"-0.5rem",fontWeight:"900",paddingTop:"0.2rem"}}>TechHiring</h3>
             <h3 onClick={()=>{history.push('/main')}} style={{marginTop:"1px",marginBottom:"-0.5rem",fontWeight:"900",paddingTop:"0.2rem"}}>Hub.com</h3>
           
      </Typography>
      <Stack direction="row"  sx={{ mt: 3 }}  spacing={2}>
        <button className="btn btn-outline-warning" style={{mystyle}} onClick={()=>{history.push('/postjob')}}><b>Job Post</b></button>
       <button className="btn btn-light" style={{color:"#003580",fontWeight:"bolder"}} onClick={()=>{history.push('/signin')}}>Sign IN</button>
       <button className="btn btn-light" style={{color:"#003580",fontWeight:"bolder"}} onClick={()=>{history.push('/')}}>Register</button>
      
    </Stack>
 
    
         
        
        
        </StyledToolbar>
        {/* <CheckboxesTags></CheckboxesTags> */}
      </AppBar>
    </Box>
  );
}

 