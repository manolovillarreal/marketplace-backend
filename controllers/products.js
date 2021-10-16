const { response, request } = require("express");

const Product = require("../models/product");
const User = require("../models/user");
const { roles } = require("../Types/types");

const productsGet = async (req = request, res = response) => {
  const { limit = 20, offset = 0, q, maxPrice, minPrice, stores } = req.query;
  let query = { state: true };
  if (q) {
    query.$or = [
      { name: { $regex: new RegExp(q, "i") } },
      { sku: { $regex: new RegExp(q, "i") } },
    ];
  }
  if (stores) {
    const users = await User.find({ name: { $in: stores } });

    query.user = { $in: users };
  }
  if (maxPrice || minPrice) query.price = {};
  if (!isNaN(minPrice)) query.price.$gt = minPrice - 1;
  if (!isNaN(maxPrice)) query.price.$lt = Number(maxPrice) + 1;

  const [total, products] = await Promise.all([
    Product.countDocuments(query),
    Product.find(query)
      .skip(Number(offset))
      .limit(Number(limit))
      .populate({
        path: "user",
        select: ["name", "uid"],
      }),
  ]);

  res.json({
    ok: true,
    total,
    products,
  });
};
const productsGetById = async (req = request, res = response) => {
  const { id } = req.params;
  let query = { state: true, __id: id };

  const product = Product.findOne(query).populate({
    path: "user",
    select: ["name", "email"],
  });
  res.json({
    ok: true,
    product,
  });
};
const productsGetByStore = async (req = request, res = response) => {
  const { name } = req.params;
  const store = await User.findOne({ name, role: roles.store });

  if (!store) {
    return res.status(404).json({
      msg: `Store with name "${name}" does'nt exist`,
    });
  }

  const { limit = 20, offset = 0 } = req.query;
  let query = { state: true, user: store };

  const [total, products] = await Promise.all([
    Product.countDocuments(query),

    Product.find(query).skip(Number(offset)).limit(Number(limit)),
  ]);

  res.json({
    ok: true,
    total,
    products,
    store,
  });
};
const productsGetByToken = async (req = request, res = response) => {
  const { limit = 20, offset = 0 } = req.query;
  let query = { state: true, user: req.user };

  const [total, products] = await Promise.all([
    Product.countDocuments(query),

    Product.find(query).skip(Number(offset)).limit(Number(limit)),
  ]);

  res.json({
    ok: true,
    total,
    products,
  });
};

const productsPost = async (req, res = response) => {
  const { name, sku, price } = req.body;

  const existSku = await Product.findOne({ sku, user: req.user });

  if (existSku) {
    return res.status(400).json({
      msg: "ya existe un producto con este sku para este usuario",
    });
  }
  const product = new Product({ name, sku, price });

  await product.save();

  res.json({
    ok: true,
    product,
  });
};

const productsPut = async (req = request, res = response) => {
  const { id } = req.params;
  const { _id, ...rest } = req.body;

  const user = req.user;
  const { sku } = rest;
  const existSku = await Product.findOne({
    $and: [{ _id: { $ne: id }, sku, user: req.user }],
  });

  if (existSku) {
    return res.status(400).json({
      msg: "ya existe un producto con este sku para este usuario",
    });
  }

  const product = await Product.findOneAndUpdate({ _id: id, user }, rest, {
    new: true,
  });

  res.json({
    ok: true,
    product,
  });
};

const producstDelete = async (req, res = response) => {
  const { id } = req.params;
  const product = await Product.findOneAndUpdate({_id:id,user:req.user}, { state: false });

  res.json(product);
};

module.exports = {
  productsPost,
  productsGet,
  productsGetById,
  productsGetByStore,
  productsGetByToken,
  productsPut,
  producstDelete
};
