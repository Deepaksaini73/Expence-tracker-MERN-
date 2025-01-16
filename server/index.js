require('dotenv').config();


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('./models/db.js');



app.use(bodyParser.json());
app.use(cors())




const PORT = process.env.PORT || 8080;


app.get('ping',(req,resp)=>{
    console.log("ping");
})


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})