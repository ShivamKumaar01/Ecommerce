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
import { useForm,SubmitHandler  } from 'react-hook-form'


const SignupForm = () => {
  const [typeofuser, setTypeOfUser] = useState('')
  const [open, setOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
    reset,
    getValues,
  } = useForm()

  // const onSubmit = (data) => console.log(data)
  function onSubmit(data){
    console.log(data);
    // store this data in local storage

    reset();

  }

  const handleChange = (event) => {
    setTypeOfUser(event.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

 
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
     

        <FormControl sx={{ m: 1, minWidth: 130 }}>
          <InputLabel id='demo-controlled-open-select-label'>
            User's Type
          </InputLabel>
          <Select
            labelId='demo-controlled-open-select-label'
            id='demo-controlled-open-select'
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={typeofuser}
            label='UserType'
            onChange={handleChange}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value='user'>user</MenuItem>
            <MenuItem value='vendor'>vendor</MenuItem>
          </Select>
        </FormControl>

        <TextField
          
          fullWidth
          label='Name'
          margin='normal'
          slotProps={{
            input: {
              ...register("name",{required:"Name is required"}),
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircle />
                </InputAdornment>
              ),
            },
          }}
          variant='outlined'
        />
        {
          errors.name &&(
            <p className="">{`${errors.name.message}`}</p>
          )
        }
        <TextField
          label='Email'
          type='email'
          variant='outlined'
          fullWidth
          margin='normal'
          slotProps={{
            input: {
              ...register("email",{required:"Email is required"}),
              startAdornment: (
                <InputAdornment position='start'>
                  <MailOutlineIcon />
                </InputAdornment>
              ),
            },
          }}
        />
         {
          errors.email &&(
            <p className="">{`${errors.email.message}`}</p>
          )
        }
        <TextField
          label='password'
          type='password'
          variant='outlined'
          fullWidth
          margin='normal'
          slotProps={{
            input: {
              ...register("password",{required:"Password is required",minLength:{
                value:8,
                message:"password must be atleast 10 character"
              }}),
              startAdornment: (
                <InputAdornment position='start'>
                  <LockIcon />
                </InputAdornment>
              ),
            },
          }}
        />
         {
          errors.password &&(
            <p className="">{`${errors.password.message}`}</p>
          )
        }
        <TextField
          label='confirm Password'
          variant='outlined'
          fullWidth
          margin='normal'
          slotProps={{
            input: {
              ...register("confirmPassword",{required:"confirm Password is required",
                validate:(value)=>{
                return  value===getValues("password")||"password must be match"
                }
              }),
              startAdornment: (
                <InputAdornment position='start'></InputAdornment>
              ),
            },
          }}
        />
         {
          errors.confirmPassword &&(
            <p className="">{`${errors.confirmPassword.message}`}</p>
          )
        }
        <Button variant='contained' color='primary' type='submit' fullWidth
        disabled={isSubmitting}>
          Continue
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
    </div>
  )
}

export default SignupForm
