const router = require('express').Router();
const ensureAuthenticated = require('../middlewares/Auth');

router.get('/',ensureAuthenticated,(req,resp)=>{
    console.log("---logeed in user ----" , req.user);
    resp.status(200).json([
        {
            name:'phone',
            price:'100'
        },
        {
            name:'phone',
            price:'100'
        },
        {
            name:'phone',
            price:'100'
        }
    ])
})

module.exports = router