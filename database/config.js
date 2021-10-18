const mongoose = require('mongoose');


const getConnectionString = ()=>{

    switch (process.env.NODE_ENV) {
        case envs.TEST: return  process.env.MONGODB_CNN;
        case envs.DEV: return  process.env.MONGODB_CNN;
        case envs.PROD: return  process.env.MONGODB_CNN;
        default: return  process.env.MONGODB_CNN;
    
        default:
            break;
    }
}
const dbConnection = async() => {

    try {

        await mongoose.connect( getConnectionString(), {
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
