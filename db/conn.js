// const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/Registration").then(()=>{
//     console.log("mongoose connected ")
// }).catch((e)=>{
//  console.log("not connected" )
//  console.log(e)
// })

import mongoose from "mongoose";

const connection = {};

async function connect(){
    if(connection.isConnected){
        return;
    }
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/Registration");

    connection.isConnected = db.connections[0].readyState;
}

export default connect;
 