import logo from './logo.svg'
import './App.css'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import SignupForm from './components/signup-form'
import LoginForm from './components/login-form'
import Home from './components/home'
import Vendor from './components/vendor-home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateProduct from './components/create-product'
import ProtectedRoute from './components/protected-route'
import Other from './components/signup-other'
// @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sora:wght@100..800&display=swap');


function App() {
  
  return (
 
    
    // <Other></Other>
    // <Vendor></Vendor>
    <Routes>
    <Route path="/form" element={<CreateProduct />} />
    <Route path="/home" element={<ProtectedRoute Component={Home} role="user" />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/" element={<Other />} />
    <Route path="/vendor" element={<ProtectedRoute Component={Vendor} role="vendor" />} />
</Routes>



    //  <Box>
    //  <Home></Home>
      // <Vendor></Vendor>   
    //  <LoginForm></LoginForm>
      //  <CreateProduct></CreateProduct> 
    // </Box> 

    
  )
}

export default App
