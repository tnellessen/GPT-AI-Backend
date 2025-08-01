const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.Db_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDb Connected');
    }
    catch (error) {
        console.error('Mongodb connection error: ', error);
        process.exit(1);
    }
};

module.exports = connectDB