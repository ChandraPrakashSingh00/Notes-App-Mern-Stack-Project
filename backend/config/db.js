const mongoose = require("mongoose");

function connectToDB(){
    mongoose.connect(process.env.DB_CONNECT)
    .then(()=>{
        console.log("Connected to Mongodb");
    })
    .catch((error) =>{
        console.log("Error");
    });
}

module.exports = connectToDB;