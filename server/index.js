require('dotenv').config();
const PORT = process.env.PORT || 8080;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('./models/db.js');
const AuthRouters = require('./Routes/AuthRouters.js')
const ProductsRouters = require('./Routes/Products.js')


app.use(bodyParser.json());
app.use(cors())
app.use('/auth',AuthRouters);
app.use('/products',ProductsRouters);







app.get('/',(req,resp)=>{
    console.log("work");
    resp.send("work")
})


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})