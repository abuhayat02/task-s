const mongoose = require('mongoose');


let userSchema = new mongoose.Schema({
    name  : {type : String , required : true},
    email : {type : String , unique : true , required : true },
    image : {type : String , required : true}
} , {timestamps : true})

let User = mongoose.model("User" , userSchema);

module.exports = User


