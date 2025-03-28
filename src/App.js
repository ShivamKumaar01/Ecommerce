import logo from './logo.svg'
import './App.css'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import SignupForm from './components/signup-form'
import LoginForm from './components/login-form'
// @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sora:wght@100..800&display=swap');


function App() {
  return (
 
    
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
        
        <SignupForm></SignupForm>
        {/* <LoginForm></LoginForm> */}
        
        
     </Box>
      </Box>

    </Box>

    
  )
}

export default App
