


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
  InputAdornment,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast} from "react-toastify";

const validationSchema = Yup.object({
  role: Yup.string().required("Role is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    
    const users = JSON.parse(localStorage.getItem(data.role === "vendor" ? "vendors" : "users"));
    console.log(users)
    const userExists = users.find(user => user.email === data.email && user.password === data.password);
    console.log(userExists)
    if (userExists && data.role === "vendor") {
      localStorage.setItem("vendorLogin", JSON.stringify(data.email));
      toast.success("Vendor loggedin successfully!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            });
      navigate("/vendor"); 
  } 
  else if (userExists && data.role === "user") {
      toast.success("user logged in successfully!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            });

      
      localStorage.setItem("userLogin", JSON.stringify(data.email));

      navigate('/home');
  }
  else {
      toast.success(" Invalid Credentials", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            });
  }
  };

  return (
    <>
      <ToastContainer/>
    
     <Box sx={{ width: 300, margin: "auto", mt: 5 }}>
      <Typography variant="h5" textAlign="center" mb={2}>Login</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth margin="normal">
          <InputLabel>Role</InputLabel>
          <Select {...register("role")}
            defaultValue=""
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="vendor">Vendor</MenuItem>
          </Select>
          {errors.role && <Typography color="error">{errors.role.message}</Typography>}
        </FormControl>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("email")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
        />
        {errors.email && <Typography color="error">{errors.email.message}</Typography>}

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("password")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
        {errors.password && <Typography color="error">{errors.password.message}</Typography>}

        <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </form>
    </Box>
    </>
  );
};

export default LoginForm;
