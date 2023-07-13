const mongoose = require('mongoose')

mongoose.Promise = Promise;

mongoose.connect("mongodb://127.0.0.1:27017/swagger", {
    useNewUrlParser: true,
}).then(()=>{
    console.log("Database is connected!")
})