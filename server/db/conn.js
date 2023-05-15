const mongoose = require("mongoose");

// const DB = 
const DB = "mongodb+srv://johnsmithdev086:john@cluster0.plurezt.mongodb.net/"
mongoose.set("strictQuery", false);

mongoose.connect(DB,{
    useNewUrlParser: true,
}).then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log("not connected");
})