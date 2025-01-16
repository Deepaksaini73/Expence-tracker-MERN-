
const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_URI;

mongoose.connect(mongo_url).then(()=>{
    console.log("mongodb connected sucessfully")
}).catch((err)=>{
    console.log("error in connection o f mongodb ", err);
})