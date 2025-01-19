const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserModel = require('../models/User')

const signup =async (req,resp)=>{
    try {
        const {name,email,password} = req.body;
        const user = await UserModel.findOne({email})

        if(user) {
            return resp.status(400).json({message: "user already exits",success : false})
        }

        const userModel = new UserModel({name,email,password});
        userModel.password = await bcrypt.hash(password,10);
        await userModel.save();
        resp.status(201).json({message:"signup sucessfully" , success : true})
        
    } catch (error) {
        resp.status(500).json({message:"internal server error" , success : false})
    }
}
const login =async (req,resp)=>{
    try {
        const {email,password} = req.body;
        const user = await UserModel.findOne({email})
        const errMsg = "username or password is wrong"

        if(!user) {
            return resp.status(400).json({message: errMsg ,success : false})
        }

        const isPassEqual = await bcrypt.compare(password,user.password);
        if(!isPassEqual){
            return resp.status(400).json({message: errMsg ,success : false})
        }

        const jwtToken = jwt.sign(
            {email:user.email , _id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:'24h'}
        )
       
        resp.status(201).json({message:"login sucessfully" , success : true, jwtToken, email})
        
    } catch (error) {
        resp.status(500).json({message:"internal server error" , success : false})
    }
}

module.exports = {
    signup,
    login
}