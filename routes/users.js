const { Router } = require("express");
const { check } = require("express-validator");

const { validateFields } = require("../middlewares/validate-fields");

const { isValidRole, isUniqueEmail,isUniqueName, existUserById } = require("../helpers/db-validators");

const { usersPost, usersGetStores, usersPut, usersDelete } = require("../controllers/users");
const { validateJWT, isAdminRole } = require("../middlewares");

const router = Router();

router.get(
  "/stores",
  [
    validateJWT,
    isAdminRole,
  ],
  usersGetStores
);

router.post(
  "/",
  [
    validateJWT,
    isAdminRole,
    check("name", "name is required").notEmpty(),
    check("name").custom(isUniqueName),
    check("email", "invalid email").isEmail(),
    check("email").custom(isUniqueEmail),
    check("password", "password must contain a least  6 digits").isLength({
      min: 6,
    }),
    check("role").custom(isValidRole),
    validateFields,
  ],
  usersPost
);

router.put(
  "/:id",
  [
    validateJWT,
    isAdminRole,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existUserById),
    check("name", "name is required").notEmpty(),
    check("name").custom(isUniqueName),
    check("email").custom(isUniqueEmail),
    check("role").custom(isValidRole),
    validateFields,
  ],
  usersPut
);

router.delete('/:id', [
  validateJWT,
  isAdminRole,
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(existUserById),
  validateFields
], usersDelete);



module.exports = router;
