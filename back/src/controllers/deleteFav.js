const FavoriteModel = require('../models/FavoriteModel');

const deleteFav = async (req, res) => {
  const { id } = req.params;

  try {
    // Eliminar el personaje de favoritos
    await FavoriteModel.destroy({ where: { id } });

    // Buscar todos los personajes favoritos y responder con ese arreglo
    const favorites = await FavoriteModel.findAll();
    res.json(favorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {deleteFav};