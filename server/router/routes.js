const express = require("express");
const router = express.Router();
const Products = require("../models/ProductsSchema");

//getproductsdata api
router.get("/getproducts", async(req,res)=>{
    try{
        const productdata =await Products.find();
        // console.log(productdata + "data get here");
        res.status(201).json({productdata})
    }catch(err){
        console.log(err);
    }
})

module.exports = router;