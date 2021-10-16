const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/user');


const validateJWT = async( req = request, res = response, next ) => {

    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            msg: 'There is no token in the request'
        });
    }

    try {
        
        const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

        // leer el usuario que corresponde al uid
        const user = await User.findById( uid );

        if( !user ) {
            return res.status(401).json({
                msg: 'Invalid token - invalid uid'
            })
        }

        // Verificar si el uid tiene estado true
        if ( !user.state ) {
            return res.status(401).json({
                msg: 'Invalid token  - user is not active'
            })
        }
        
        
        req.user = user;
        next();

    } catch (error) {

        // console.log(error);
        res.status(401).json({
            msg: 'Invalid token: '+error
        })
    }

}




module.exports = {
    validateJWT
}