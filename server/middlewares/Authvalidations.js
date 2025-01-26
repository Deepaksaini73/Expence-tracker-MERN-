const joi = require('joi')


const signupValidations = (req,resp,next)=>{

    const Schema = joi.object({
        name:joi.string().min(3).max(100).required(),
        email:joi.string().email().required(),
        password:joi.string().min(8).max(20).required(),
    });
    const {error} = Schema.validate(req.body);
    if(error) {
        return resp.status(400).json({mesage:'bad message ', error});
    }
    next();

}
const loginValidations = (req,resp,next)=>{

    const Schema = joi.object({
        email:joi.string().email().required(),
        password:joi.string().max(20).required(),
    });
    const {error} = Schema.validate(req.body);
    if(error) {
        return resp.status(400).json({message:'bad message ', error});
    }
    next();
}

module.exports = {
    signupValidations,
    loginValidations
}