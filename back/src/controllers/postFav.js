const FavoriteModel = require('../models/FavoriteModel');

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;

  // Verificar que todos los datos estén llegando correctamente
  if (!name || !origin || !status || !image || !species || !gender) {
    return res.status(401).json({ message: "Faltan datos" });
  }

  try {
    // Guardar el personaje en la base de datos
    const [favorite, created] = await FavoriteModel.findOrCreate({
      where: { name, origin, status, image, species, gender },
    });

    // Buscar todos los personajes favoritos y responder con ese arreglo
    const favorites = await FavoriteModel.findAll();
    res.json(favorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {postFav};