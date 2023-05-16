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

//getindividual data api (single cart)

router.get("/cart/:id", async(req,res)=>{
    try{
            const {id} = req.params
            // console.log(id);
            const individualdata = await Products.findOne({id:id});
            // console.log(individualdata);
            res.status(201).json(individualdata);
    }catch(err){
        console.log(err);
        res.status(400).json({err: "not come individual id data"})
    }
})

module.exports = router;