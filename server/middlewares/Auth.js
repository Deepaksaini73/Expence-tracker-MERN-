const jwt = require('jsonwebtoken')

const ensureAuthenticated = (req,resp,next)=>{
    const auth = req.headers['authorization'] ;
    if(!auth){
        return resp.status(400).json({message:"unauthorised , jwt token is required"})
    }
    try {
        const decoded = jwt.verify(auth,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return resp.status(400).json({message:"unauthorised , jwt token is wrong or expired ",error});
    }
}

module.exports = ensureAuthenticated;