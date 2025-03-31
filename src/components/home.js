import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { FaCartArrowDown } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { TextField } from "@mui/material";
import { useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;
 export const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price:"$20",
    email:"",
    imgUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2lyZWxlc3MlMjBoZWFkcGhvbmV8ZW58MHx8MHx8fDA%3D",
    description:
      "Stylish wireless headphones with noise cancellation. Enjoy immersive sound quality and long battery life.",
  },
  {
    id: 2,
    title: "Gaming Mouse",
    price:"$20",
    email:"",
    imgUrl:
      "https://images.unsplash.com/photo-1619334084350-b093f0a9b40e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWluZyUyMG1vdXNlfGVufDB8fDB8fHww",
    description:
      "Ergonomic gaming mouse with customizable RGB lighting. Designed for precision and long gaming sessions.",
  },
  {
    id: 3,
    title: "Smartwatch",
    price:"$20",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1712764121254-d9867c694b81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Smartwatch with heart rate monitoring and GPS tracking. Stay fit and connected with notifications on your wrist.",
  },
  {
    id: 4,
    title: "4K Smart TV",
    price:"$20",
    email:"",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1682274001252-cd39d7158ae3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8NEslMjBTbWFydCUyMFRWfGVufDB8fDB8fHww",
    description:
      "4K Ultra HD smart TV with built-in streaming apps. Experience stunning visuals and surround sound.",
  },
  {
    id: 5,
    title: "Lightweight Laptop",
    price:"$20",
    email:"",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1661594739160-b26f505a09b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TGlnaHR3ZWlnaHQlMjBMYXB0b3B8ZW58MHx8MHx8fDA%3D",
    description:
      "Lightweight laptop with high-performance processor and SSD storage. Ideal for work, study, and entertainment.",
  },
  {
    id: 6,
    title: "Wireless Earbuds",
    price:"$20",
    imgUrl:
      "https://images.unsplash.com/photo-1606221793073-1e3b79689777?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdpcmVsZXNzJTIwRWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Wireless earbuds with deep bass and water resistance. Perfect for workouts, travel, and daily use.",
  },
  {
    id: 7,
    title: "Gaming Keyboard",
    price:"$20",
    imgUrl:
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R2FtaW5nJTIwS2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
    description:
      "Gaming keyboard with mechanical switches and RGB backlight. Enhance your gaming experience with responsive keys.",
  },
  {
    id: 8,
    title: "Bluetooth Speaker",
    price:"$20",
    email:"",
    imgUrl:
      "https://images.unsplash.com/photo-1582978571763-2d039e56f0c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Qmx1ZXRvb3RoJTIwU3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Portable Bluetooth speaker with long battery life and deep bass. Take your music anywhere with superior sound quality.",
  },
  {
    id: 9,
    title: "Smartphone",
    price:"$20",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Smartphone with high-resolution camera and AMOLED display. Capture stunning photos and enjoy smooth performance.",
  },
  {
    id: 10,
    title: "Tablet with Stylus",
    price:"$20",
    email:"",
    imgUrl:
      "https://images.unsplash.com/photo-1527698266440-12104e498b76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VGFibGV0JTIwd2l0aCUyMFN0eWx1c3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Tablet with stylus support and powerful processor. Ideal for creatives, students, and professionals on the go.",
  },
  {
    id: 11,
    title: "Wireless Charging Pad",
    price:"$20",
    email:"",
    imgUrl:
      "https://images.unsplash.com/photo-1678733405763-ecaf19dbccbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2lyZWxlc3MlMjBDaGFyZ2luZyUyMFBhZHxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Wireless charging pad with fast charging capability. Charge multiple devices efficiently and clutter-free.",
  },
  {
    id: 12,
    title: "Compact Drone",
    price:"$20",
    email:"",
    imgUrl:
      "https://images.unsplash.com/photo-1473186639016-1451879a06f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fENvbXBhY3QlMjBEcm9uZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Compact drone with HD camera and GPS tracking. Capture stunning aerial shots with ease and precision.",
  },
  {
    id: 13,
    title: "Fitness Tracker",
    price:"$20",
    email:"",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1681495023390-f68740fa8fec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Rml0bmVzcyUyMFRyYWNrZXJ8ZW58MHx8MHx8fDA%3D",
    description:
      "Fitness tracker with step counter and sleep monitoring. Keep track of your health goals and stay motivated.",
  },
  {
    id: 14,
    title: "DSLR Camera",
    price:"$20",
    email:"",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1674389991678-0836ca77c7f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RFNMUiUyMENhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Professional DSLR camera with high-resolution lens. Perfect for capturing detailed and high-quality photographs.",
  },
  {
    id: 15,
    title: "Home Security Camera",
    price:"$20",
    email:"",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1681487394066-fbc71a037573?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SG9tZSUyMFNlY3VyaXR5JTIwQ2FtZXJhfGVufDB8fDB8fHww",
    description:
      "Smart home security camera with motion detection. Monitor your home remotely with real-time alerts.",
  },
  {
    id: 16,
    title: "Bluetooth Headset",
    price:"$20",
    email:"",
    imgUrl:
      "https://images.unsplash.com/photo-1629429407756-4a7703614972?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fEJsdWV0b290aCUyMEhlYWRzZXR8ZW58MHx8MHx8fDA%3D",
    description:
      "Noise-canceling Bluetooth headset for clear calls. Enjoy crystal-clear sound in any environment.",
  },
  {
    id: 17,
    title: "Gaming Chair",
    price:"$20",
    email:"",
    imgUrl:
      "https://images.unsplash.com/photo-1598550473359-433795503a0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R2FtaW5nJTIwQ2hhaXJ8ZW58MHx8MHx8fDA%3D",
    description:
      "Mechanical gaming chair with ergonomic design. Stay comfortable during long gaming or work sessions.",
  },
  {
    id: 18,
    title: "Portable Power Bank",
    price:"$20",
    email:"",
    imgUrl:
      "https://images.unsplash.com/photo-1594843665794-446ce915d840?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UG93ZXIlMjBCYW5rfGVufDB8fDB8fHww",
    description:
      "Portable power bank with fast charging and high capacity. Keep your devices powered up on the go.",
  },
  {
    id: 19,
    title: "Shoes",
    price:"$20",
    email:"",
    imgUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    description:
      "External hard drive with high storage capacity. Securely store and back up all your important files.",
  },
  {
    id: 20,
    title: "Washing Machine",
    price:"$20",
    email:"",
    imgUrl:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2FzaGluZyUyME1hY2hpbmV8ZW58MHx8MHx8fDA%3D",
    description:
      "VR headset with immersive gaming experience. Dive into virtual worlds with high-quality visuals.",
  },
  {
    id: 21,
    title: "Bicycle",
    price:"$20",
    email:"",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Multi-functional printer with wireless connectivity. Print, scan, and copy seamlessly from any device.",
  },
  {
    id: 22,
    title: "Tshirt",
    price:"$20",
    email:"",
    imgUrl:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VHNoaXJ0fGVufDB8fDB8fHww",
    description:
      "Smart air purifier with real-time air quality monitoring. Keep your home fresh and free from pollutants.",
  },
  {
    id: 23,
    title: "Bag",
    price:"$20",
    email:"",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmFnfGVufDB8fDB8fHww",
    description:
      "Electric standing desk with adjustable height. Improve posture and productivity with flexible work setups.",
  },
  {
    id: 24,
    title: "Cordless Vacuum Cleaner",
    price:"$20",
    email:"",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1676810460039-661fc847e395?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENvcmRsZXNzJTIwVmFjdXVtJTIwQ2xlYW5lcnxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Cordless vacuum cleaner with powerful suction. Clean efficiently with lightweight and easy maneuverability.",
  },
  {
    id: 25,
    title: "Smart Refrigerator",
    price:"$20",
    email:"",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1718198502177-a9533e9c92d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNtYXJ0JTIwUmVmcmlnZXJhdG9yfGVufDB8fDB8fHww",
    description:
      "Smart refrigerator with touch display and AI integration. Keep food fresh and manage groceries effortlessly.",
  },
];
let array=JSON.stringify(products);
if(!localStorage.getItem("alldata")|| localStorage.getItem("alldata").length==0){
  localStorage.setItem("alldata",array);
}

const itemperPage=10;


const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const[item,setItem]=useState(0);
  const[page,setPage]=useState('1');
  const navigate=useNavigate();

  function handlePagechange(event,value){
    setPage(value);
  }
  const startingIndex=(page-1)*itemperPage;
  const endingIndex=startingIndex+itemperPage-1;
  const filterWalaArray= JSON.parse(localStorage.getItem("alldata"))
  console.log(filterWalaArray);
  const newProducts=filterWalaArray.slice(startingIndex,endingIndex);


  // this is for handling search item
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const data=JSON.parse(localStorage.getItem("alldata"))
    const filteredData=data.filter((item) => {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setItem(filteredData.length);
      console.log(filteredData.length);
      

   
    
  };
  function addButtonHandler(){
    if(item===NaN){
      setItem(1);
    }
    else{
      setItem(item+1);
    }
    
   
  }
  function logoutHandler(){
    localStorage.removeItem("userLogin");
    navigate('/login');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App
          </Typography>
          <Button color="inherit">Home</Button>
          <IconButton>
            <ShoppingCartIcon fontSize="small" />
            <CartBadge badgeContent={item} color="primary" overlap="circular" />
          </IconButton>
          <Button color="inherit">
            <FaPowerOff onClick={logoutHandler} />
          </Button>
        </Toolbar>
      </AppBar>
      <Box marginTop={8} >
      {/* search bar */}
        <Box component="section" sx={{ p: 2, border: "1px dashed grey",width:"full" }}>
          <TextField
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
            maxWidth={100}
          />
          
        </Box>
        <Box>WELCOME{ JSON.parse(localStorage.getItem("userLogin"))}</Box>

        <Box
          component="section"
          sx={{
            p: 2,
            border: "1px dashed red",
            flexWrap: "wrap",
            display: "flex",
            gap: 2,
            
          }}
        >
          {newProducts.map((product, index) => {
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
                  <Typography gutterBottom variant="h6" component="div">
                    {product.price}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={addButtonHandler} size="small">Add</Button>
                </CardActions>
              </Card>
            );
          })}
          
        </Box>
      </Box>
      <Box  component="section" sx={{paddingTop:2, border: '1px dashed grey',paddingLeft:'40% '}}>
      <Stack spacing={2}>
      <Pagination count={Math.ceil(products.length/10)} onChange={handlePagechange} page={page} />
    </Stack>
      </Box>
    </Box>
  );
};

export default Home;
