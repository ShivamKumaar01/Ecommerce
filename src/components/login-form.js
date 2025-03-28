
import React from 'react'
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
import { useForm,SubmitHandler, set  } from 'react-hook-form'
import * as Yup from 'yup'


const LoginForm = () => {
  const[errors,setErrors]=useState()
  const validationSchema=Yup.object({
    email:Yup.string().email("Invalid Email").required("First Name is required"),
    password:Yup.string().required("Password is required")
  })
   async function handleSubmit(e){
    e.preventDefault();
    try{
      await validationSchema.validate(FormData,{abortEarly:false})
      console.log("you are logged in")
      // check db and if the user is present then loged in else show an error
    }
    catch(error){
      const newErrors={}
      error.inner.forEach(err => {
        newErrors[err.path]=err.message;
      });
      setErrors(newErrors);

    }

  }
  return (
    <div>
       <form onSubmit={handleSubmit} >
    
     <TextField
       label='Email'
       variant='outlined'
       fullWidth
       margin='normal'
       slotProps={{
         input: {
           
           startAdornment: (
             <InputAdornment position='start'>
               <MailOutlineIcon />
             </InputAdornment>
           ),
         },
       }}
     />
     {/* {newErrors.email && <p className='error'>{newErrors.email}</p>} */}
  
     <TextField
       label='password'
       type='password'
       variant='outlined'
       fullWidth
       margin='normal'
       slotProps={{
         input: {
           
           startAdornment: (
             <InputAdornment position='start'>
               <LockIcon />
             </InputAdornment>
           ),
         },
       }}
     />
     {/* {errors.password && <p className='error'>{errors.password}</p>} */}
      
    
      
     <Button variant='contained' color='primary' type='submit' fullWidth
     >
       Login
     </Button>
     <Box>
       <Typography marginTop={3} textAlign={'center'}>
         Login in with
       </Typography>
       <Box marginLeft={18} paddingTop={2}>
         <img className='fb-img' src={fbimg}></img>
         <img className='google-img' src={appleimg}></img>
         <img className='apple-img' src={googleimg}></img>
       </Box>
       <Box display={'flex'} marginLeft={8} marginTop={2}>
         <Typography>Don't have an account? </Typography>
         <Typography color='#3FB6FF'>signup </Typography>
       </Box>
     </Box>
   </form>
    </div>
  )
}

export default LoginForm