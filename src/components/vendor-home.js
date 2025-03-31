import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState,useEffect } from "react";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const vendorProducts = JSON.parse(localStorage.getItem("alldata"));
let filterdProduct=vendorProducts.filter((vendorProduct)=>{
  console.log(JSON.parse(localStorage.getItem("vendorLogin")));
  return(
    vendorProduct.email===JSON.parse(localStorage.getItem("vendorLogin"))
  )
})
console.log(filterdProduct,vendorProducts);


const Vendor = () => {
  const [filteredProduct, setFilteredProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const vendorProducts = JSON.parse(localStorage.getItem("alldata")) || [];
    const vendorEmail = JSON.parse(localStorage.getItem("vendorLogin"));

    
    const vendorSpecificProducts = vendorProducts.filter(
      (product) => product.email === vendorEmail
    );

    setFilteredProduct(vendorSpecificProducts);
  }, []);

  function createProductHandler() {
    navigate("/form");
  }

  function deleteHandler(id) {
    
    const data = JSON.parse(localStorage.getItem("alldata")) || [];

    
    const updatedData = data.filter((product) => product.id !== id);

    
    localStorage.setItem("alldata", JSON.stringify(updatedData));

    
    setFilteredProduct((prevProducts) => prevProducts.filter((p) => p.id !== id));
  }
  function logoutHandler(){
    const logedin=JSON.parse(localStorage.getItem("vendorLogin"))
    localStorage.removeItem("vendorLogin");
    navigate('/login')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {/* <Button variant="contained" color="success" marginLeft="2px">
        Create
      </Button> */}
        </Toolbar>
      </AppBar>
      <Box>
        <Box
          component="section"
          sx={{ p: 2, border: "1px dashed grey", textAlign: "end" }}
        >
          <Button
            onClick={createProductHandler}
            variant="contained"
            color="success"
          >
            Create
          </Button>
          <Button
            
            onClick={logoutHandler}
            variant="contained"
            color="danger"
          >
            Logout
          </Button>
        </Box>
        <Typography>WELCOME {localStorage.getItem("vendorLogin")}</Typography>
        <Box>
         
          {filterdProduct.map((product, index) => {
            return (
              <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={product.imgUrl}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => deleteHandler(product.id)}>Delete</Button>
                  
                </CardActions>
              </Card>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Vendor;
