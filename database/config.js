const mongoose = require('mongoose');
const { envs } = require('../Types/types');


const getConnectionString = ()=>{

    switch (process.env.NODE_ENV) {
        case envs.TEST: return  process.env.MONGODB_CNN_TEST;
        case envs.DEV: return  process.env.MONGODB_CNN_DEV;
        case envs.PROD: return  process.env.MONGODB_CNN;
        default: return  process.env.MONGODB_CNN;
    }
}
const dbConnection = async() => {

    try {
        const cnn =  getConnectionString();
        await mongoose.connect( cnn, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    
        console.log('Database online');

    } catch (error) {
        console.log(error);
        throw new Error('Database initiation failed');
    }


}



module.exports = {
    dbConnection
}
