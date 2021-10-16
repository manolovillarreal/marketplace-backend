const { Router } = require("express");
const { check } = require("express-validator");

const { validateFields,validateJWT, hasRole } = require("../middlewares");
const { productsPost, productsGet, productsGetByStore, productsGetById, productsGetByToken, productsPut, producstDelete } = require("../controllers/products");
const { existProductById } = require("../helpers/db-validators");

const router = Router();


router.get('/',productsGet)

router.get('/:id', [
  check('id', 'No es un ID valido').isMongoId(),
  check('id').custom(existProductById),
  validateFields,
], productsGetById);

router.get('/stores/:name',[
  check('name','name is required').notEmpty(),
],productsGetByStore);

router.get('/store/mine',[
  validateJWT,
],productsGetByToken);


router.post(
    "/",
    [
        validateJWT,
        hasRole('SELLER_ROLE'),
        check('name', "El nombre es requerido").notEmpty(),
        check("sku", "El sku is requerido").notEmpty(),
        check("price", "El precio es requerido").isNumeric(),
        check("stock", "La cantidad es requerida").isNumeric(),
      validateFields,
    ],
    productsPost
  );

  router.put(
    "/:id",
    [
        validateJWT,
        hasRole('SELLER_ROLE'),
        check('id').custom(existProductById),
        check('name', "El nombre es requerido").notEmpty(),
        check("sku", "El sku is requerido").notEmpty(),
        check("price", "El precio es requerido").isNumeric(),
        check("stock", "La cantidad es requerida").isNumeric(),
      validateFields,
    ],
    productsPut
  );

  router.delete('/:id', [
    validateJWT,
    hasRole('SELLER_ROLE'),
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existProductById),
    validateFields
  ], producstDelete);

  
module.exports = router;