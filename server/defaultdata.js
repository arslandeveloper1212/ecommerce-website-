const Products = require("./models/ProductsSchema");
const products = require("./constants/ProductsData");

const DefaultData = async()=>{
   try{
    await Products.deleteMany({});
    const Data = await Products.insertMany(products);
    console.log(Data);
   }catch(err){
    console.log(err);
   }
       
  
}

module.exports = DefaultData;