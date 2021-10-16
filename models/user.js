
const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        unique: true
    },email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
    role: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'SELLER_ROLE','CLIENT_ROLE']
    },
    state: {
        type: Boolean,
        default: true
    },
});



UserSchema.methods.toJSON = function() {
    const { __v, password, _id, ...user  } = this.toObject();
    user.uid = _id;
    return user;
}

module.exports = model( 'User', UserSchema );
