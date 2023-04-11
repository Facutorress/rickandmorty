const {User} = require("../DB_connection")

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "Faltan datos" });
      return;
    }

    const newUser = await User.create({
      email: email,
      password: password,
    });

    res.json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al crear el usuario" });
  }
};

module.exports = { postUser };