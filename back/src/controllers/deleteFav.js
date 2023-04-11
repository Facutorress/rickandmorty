const FavoriteModel = require('../models/FavoriteModel');

const deleteFav = async (req, res) => {
  const { id } = req.params;

  try {
    
    await FavoriteModel.destroy({ where: { id } });

  
    const favorites = await FavoriteModel.findAll();
    res.json(favorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {deleteFav};