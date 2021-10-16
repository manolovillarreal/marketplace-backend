
const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    sku: {
        type: String,
        required: [true, 'sku is required'],
    },
    price: {
        type: Number,
        required: [true, 'prices is required'],
        default: 0
    },
    stock: {
        type: Number,
        required: [true, 'stock is required'],
        default: 0
    },
    user:{
        type: Schema.Types.ObjectId, 
        ref: 'User',
        require:true
    },
    state: {
        type: Boolean,
        default: true
    },
});

ProductSchema.methods.toJSON = function() {
    const { __v, _id, ...product  } = this.toObject();
    product.id = _id;
    return product;
}

module.exports = model( 'Product', ProductSchema );
