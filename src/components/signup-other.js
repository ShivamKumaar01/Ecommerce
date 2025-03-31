import React from 'react'
import SignupForm from './signup-form'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import InputAdornment from '@mui/material/InputAdornment'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LockIcon from '@mui/icons-material/Lock'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import './signup-form.css'
import fbimg from '../assets/fbimg.png'
import appleimg from '../assets/apple.png'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useState } from 'react'
import googleimg from '../assets/google.png'
import { useForm,SubmitHandler  } from 'react-hook-form'
import IconButton from '@mui/material/IconButton';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdVisibilityOff } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
import { useNavigate } from 'react-router-dom'



const schema = yup.object().shape({
  role: yup.string().required("Role is required"),
  name: yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must have at least one uppercase letter")
    .matches(/[a-z]/, "Password must have at least one lowercase letter")
    .matches(/[0-9]/, "Password must have at least one number")
    .matches(/[@$!%*?&#]/, "Password must have at least one special character")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Other = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
    
      const [showPassword, setShowPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);
      const navigate=useNavigate();
      const togglePasswordVisibility = () => setShowPassword(!showPassword);
      const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);
     const onSubmit = (data) => {
         console.log("Submitted Data:", data,data.role==="vendor");
         if(data.role==="vendor"){
           let vendors=JSON.parse(localStorage.getItem("vendors")) || [];
           console.log( "helllllll",vendors)
           vendors.push(data);
     
           localStorage.setItem("vendors",JSON.stringify(vendors));
         }
         else{
           let users = JSON.parse(localStorage.getItem("users")) || [];
           users.push(data);
           localStorage.setItem("users",JSON.stringify(users));
         }
     
         toast.success("Signup Successful!", {
           position: "top-right",
           autoClose: 3000,
          
         });
         console.log("navigate to login");
         setTimeout(() => {
           navigate('/login');
         }, 1000);
       };
  return (
    <div>
          <Box display={'flex'}>
        <Box component='section' sx={{ border: '1px solid red', width: '40%',height:'30%' }}>
          
        <img
         className='left-img'
         src='https://plus.unsplash.com/premium_photo-1669584523544-77b08d291a43?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
         >

         </img>
        
      </Box>
      <Box component='section' sx={{ p: 2,width:'60%', paddingLeft:'20%',paddingTop:'10%',borderRadius:'6' }}>
      <Box component='section' sx={{ p: 2,width:'43%' }}>
        <Typography fontSize={32}>Create your account! </Typography>
        <Typography marginTop={2}></Typography>
        
   
       <ToastContainer />

<Box
  sx={{
    minWidth: 100,
    mx: "auto",
    mt: 5,
    p: 3,
    boxShadow: 3,
    borderRadius: 2,
  }}
>
  <Typography variant="h5" gutterBottom>
    Signup
  </Typography>

  <form onSubmit={handleSubmit(onSubmit)}>

    <FormControl fullWidth margin="normal">
      <InputLabel>Role</InputLabel>
      <Select {...register("role")} error={!!errors.role}>
        <MenuItem value="vendor">Vendor</MenuItem>
        <MenuItem value="user">User</MenuItem>
      </Select>
      <Typography variant="caption" color="error">
        {errors.role?.message}
      </Typography>
    </FormControl>


    <TextField
      label="Name"
      fullWidth
      margin="normal"
      {...register("name")}
      error={!!errors.name}
      helperText={errors.name?.message}
    />


    <TextField
      label="Email"
      fullWidth
      margin="normal"
      {...register("email")}
      error={!!errors.email}
      helperText={errors.email?.message}
    />

 
    <TextField
      label="Password"
      type={showPassword ? "text" : "password"}
      fullWidth
      margin="normal"
      {...register("password")}
      error={!!errors.password}
      helperText={errors.password?.message}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={togglePasswordVisibility} edge="end">
              {showPassword ? <MdVisibilityOff /> : <MdOutlineVisibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />

  
    <TextField
      label="Confirm Password"
      type={showConfirmPassword ? "text" : "password"}
      fullWidth
      margin="normal"
      {...register("confirmPassword")}
      error={!!errors.confirmPassword}
      helperText={errors.confirmPassword?.message}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={toggleConfirmPasswordVisibility} edge="end">
              {showConfirmPassword ? <MdVisibilityOff /> : <MdOutlineVisibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />

  
    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
      Signup
    </Button>


    <Box>
       <Typography marginTop={3} textAlign={'center'}>
         sign in with
       </Typography>
       <Box marginLeft={18} paddingTop={2}>
         <img className='fb-img' src={fbimg}></img>
         <img className='google-img' src={appleimg}></img>
         <img className='apple-img' src={googleimg}></img>
       </Box>
       <Box display={'flex'} marginLeft={8} marginTop={2}>
         <Typography>Already have an account? </Typography>
         <Typography color='#3FB6FF'>login </Typography>
       </Box>
       
    </Box>
  </form>
</Box>
        
        
        
     </Box>
      </Box>

    </Box>
    </div>
  )
}

export default Other