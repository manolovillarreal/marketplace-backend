const Role = require('../models/role');
const User = require('../models/user');
const Product = require('../models/product');
const { roles } = require('../Types/types');

const isValidRole = async(role = '') => {

    const roleExists = await Role.findOne({ role });
    if ( !roleExists || role === roles.admin) {
        throw new Error(`el rol ${ role } no es valido`);
    }
}

const isUniqueEmail = async( email = '' ) => {

    // Verificar si el correo existe
    const existsEmail = await User.findOne({ email });
    if ( existsEmail ) {
        throw new Error(`el email: ${ email }, ya esta registrado`);
    }
}
const isUniqueName = async( name = '' ) => {

    // Verificar si el correo existe
    const existsEmail = await User.findOne({ name });
    if ( existsEmail ) {
        throw new Error(`el nombre "${ name }", ya esta registrado`);
    }
}

const existUserById = async( id ) => {

    // Verificar si el correo existe
    const userExists = await User.findById(id);
    if ( !userExists ) {
        throw new Error(`no existe el usuario con id: ${ id }`);
    }
}


const existProductById = async( id ) => {

    // Verificar si el correo existe
    const productExists = await Product.findById(id);
    if ( !productExists ) {
        throw new Error(`no exite el producto de id: ${ id }`);
    }
}
const isUniqueProductSKU = async( sku = '' ) => {

    // Verificar si el correo existe
    const existsSku = await Product.findOne({ sku });
    if ( existsSku ) {
        throw new Error(`no existe el producto con  sku: ${ sku }`);
    }
}


module.exports = {
    isValidRole,
    isUniqueEmail,
    isUniqueName,
    existUserById,
    existProductById,
    isUniqueProductSKU
}

