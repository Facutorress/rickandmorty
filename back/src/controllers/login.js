const UserModel= require("../models/UserModel")

const login = async (req, res) => {
  const { email, password } = req.query;

  // Verificar que ambos datos sean recibidos
  if (!email || !password) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  try {
    // Buscar usuario por email
    const user = await UserModel.findOne({ where: { email } });

    // Verificar que el usuario exista
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Comparar contraseñas
    if (user.password !== password) {
      return res.status(403).json({ message: "Contraseña incorrecta" });
    }

    // Si las contraseñas coinciden, responder con access:true
    return res.json({ access: true });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {login};