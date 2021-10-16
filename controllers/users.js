const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');
const { roles } = require('../Types/types');

const usersGetStores = async(req,res)=>{  

    const query = {role:roles.store}
    let [total, users] = await Promise.all([
        User.countDocuments(query),
        User.find(query)
    ]);
    
    users = users.map(user => {
        return { name:user.name,uid:user.id};
    });
    res.json({
        ok:true,
        total,
        users
    })

    

}

const usersPost = async(req, res = response) => {
    
    const { name,email, password, role } = req.body;
    const user = new User({name, email, password, role });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD
    await user.save();

    res.json({
        user
    });
}

const usersPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, email, ...rest } = req.body;

    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync( password, salt );
    }
    const user = await User.findByIdAndUpdate( id, rest );

    res.json(user);
}

const usersDelete = async(req, res = response) => {

    const { id } = req.params;
    const user = await Usuario.findByIdAndUpdate( id, { state: false } );

    res.json(user);
}




module.exports = {
     usersPost,
     usersGetStores,
     usersPut,
     usersDelete
}