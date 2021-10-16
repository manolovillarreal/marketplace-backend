const { Router } = require("express");
const { check } = require("express-validator");

const { validateFields } = require("../middlewares/validate-fields");
const {
  isValidRole,
  isUniqueEmail,
  isUniqueName,
} = require("../helpers/db-validators");


const { login, register, refreshToken } = require("../controllers/auth");
const { validateJWT } = require("../middlewares");

const router = Router();

router.post(
  "/login",
  [
    check("email", "email invalido").isEmail(),
    check("password", "la contrasena es requerida ").not().isEmpty(),
    validateFields,
  ],
  login
);

router.post(
  "/new",
  [
    check("name", "El nombre es requerio").notEmpty(),
    check("name").custom(isUniqueName),
    check("email", "email invalido").isEmail(),
    check("email").custom(isUniqueEmail),
    check("password", "la contrasena debe tener al menos 8 digitos").isLength({
      min: 8,
    }),
    check("role").custom(isValidRole),
    validateFields,
  ],
  register
);

router.get("/renew", validateJWT, refreshToken);

module.exports = router;
