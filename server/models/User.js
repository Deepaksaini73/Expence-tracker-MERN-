const { required } = require('joi');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:{
        typeof:string,
        required : true,
    },
    email:{
        typeof:string,
        required : true,
        unique:true,
    },
    password:{
        typeof:string,
        required : true,
    }
})

const UserModel = mongoose.model('users',userSchema);
module.exports = UserModel;