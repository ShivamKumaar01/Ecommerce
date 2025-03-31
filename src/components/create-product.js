import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@mui/material";
import { products } from "./home";
import { toast ,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const schema = yup.object().shape({
  title: yup.string().required("Product name is required"),
  imgUrl: yup
    .string()
    .url("Enter a valid URL")
    .required("Product URL is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be a positive number")
    .required("Price is required"),
    description:yup.string().required("description is required"),
});

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate=useNavigate();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    data.email=JSON.parse(localStorage.getItem("vendorLogin"))
    const array=JSON.parse(localStorage.getItem('alldata'))
    const size=array.length;
    const newid=size+1;
    data.id=newid;
    console.log("Submitted Data:", data);
    const existedProduct=JSON.parse(localStorage.getItem("alldata"))
   existedProduct.push(data);
   localStorage.setItem("alldata", JSON.stringify(existedProduct));
   console.log(products);
   console.log("this is existed product",existedProduct);

    // let existingData = JSON.parse(localStorage.getItem("newProducts")) || [];

    // existingData.push(data);

    // localStorage.setItem("newProducts", JSON.stringify(existingData));
    toast.success("Product created successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

    // console.log("Local storage me store ho gaya hai g", existingData);
    setTimeout(() => {
        navigate('/vendor');
      }, 1000);
  };
    function createFormHandler(){

    }
  return (
    <>
      <ToastContainer/>
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 5,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Add Product
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      
        <TextField
          label="Product Name"
          fullWidth
          margin="normal"
          {...register("title")}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
        <TextField
          label="Product URL"
          fullWidth
          margin="normal"
          {...register("imgUrl")}
          error={!!errors.imgUrl}
          helperText={errors.imgUrl?.message}
        />
        <TextField
          label="Price"
          fullWidth
          margin="normal"
          type="number"
          {...register("price")}
          error={!!errors.price}
          helperText={errors.price?.message}
        />
          <TextField
          label="description"
          fullWidth
          margin="normal"
          type="text"
          {...register("description")}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          
          sx={{ mt: 2 }}
          onClick={createFormHandler}
        >
          Submit
        </Button>
      </form>
    </Box>
    </>
  );
};

export default CreateProduct;
