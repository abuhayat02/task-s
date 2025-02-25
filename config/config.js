const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

let connectionWithMongoose = async ()=>{

    try{
        let connection = await mongoose.connect(process.env.MONGO_DB_URL)
        console.log('connection is successfull with mongodb')
    }catch(error){
        console.log(error)
        console.log({connected : false})
    }

}

module.exports = connectionWithMongoose











