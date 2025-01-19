const router = require('express').Router();

router.get('/products',(req,resp)=>{
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