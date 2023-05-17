const env = require('dotenv');
const express = require("express")

const app = express();
const cors = require("cors")
const mongoose = require('mongoose');


require("./db/conn")
const DefaultData = require("./defaultdata");
const router = require("./router/routes")
const Products = require("./models/ProductsSchema");
const userModel = require("./models/userSchema");

app.use(express.json());
app.use(cors());
app.use(router);
env.config({path:"./config.env"})



const port = process.env.PORT || 8202;








app.get("/", (req,res)=>{
    res.send("home page");
})




app.listen(port, (req,res)=>{
    console.log(`listen to the port of ${port}`)
})

DefaultData();

