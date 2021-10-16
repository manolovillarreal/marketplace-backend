const { response } = require("express");
const bcryptjs = require("bcryptjs");

const User = require("../models/user");

const { generateJWT } = require("../helpers/generate-jwt");

const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    // Verificar si el email existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: "El correo o la contraseña son incorrectos.",
      });
    }

    // SI el usuario está activo
    if (!user.state) {
      return res.status(400).json({
        msg: "Este usuario se encuentra inactivo.",
      });
    }

    // Verificar la contraseña
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "El correo o la contraseña son incorrectos.",
      });
    }

    // Generar el JWT
    const token = await generateJWT(user.id);

    res.json({
      ok: true,
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error generando el token de autenticacion",
    });
  }
};

const register = async (req, res = response) => {
  try {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    // Guardar en BD
    await user.save();

    // Generar el JWT
    const token = await generateJWT(user.id);

    res.json({
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error generating the authentication token",
    });
  }
};

const refreshToken = async (req, res = response) => {
  try {

    // Generar JWT
    const token = await generateJWT(req.user.id);
    res.json({
      ok: true,
      user: req.user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error generando el token de autenticacion",
    });
  }
};

module.exports = {
  login,
  register,
  refreshToken,
};
