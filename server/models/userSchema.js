const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(uservalue){
            if(!validator.isEmail(uservalue)){
                throw new Error("Email address not valid")
            }
        }
    },
    password: {
        type: String,
        required: true,
        unique: true,
        minlength: 6
    },
    cpassword: {
        type: String,
        required: true,
        unique: true,
        minlength: 6
    },
    tokens: [
        {
            token:{
                type: String,
                required: true,
            }
        }
    ],
    carts: Array
})


const userModel = new mongoose.model("users", userSchema);
module.exports = userModel;