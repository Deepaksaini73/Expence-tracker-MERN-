const jwt = require('jsonwebtoken')

const ensureAuthenticated = (req,resp,next)=>{
    const auth = req.headers['authorization'] ;
    
}