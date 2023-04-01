const {Router}= require("express")
const getCharById = require("../controllers/getCharById")
const getCharDetail = require("../controllers/getCharDetail")
const favs = require("../utils/favs")

const router = Router();

router.get("/rickandmorty/onsearch/:id",getCharById)
router.get("/rickandmorty/detail/:id", getCharDetail)

router.post("/rickandmorty/fav",(req,res)=>{
  favs.push(req.body)
  res.status(200).json({fav:OK})
})


router.get("/rickandmorty/fav", (req,res)=>{
  res.status(200).json(favs)
})

router.delete("/rickandmorty/fav/:id",(req,res)=>{
const {id}= req.params
favs= favs.filter((fav)=> id!==Number(fav.id))
res.status(200).json({fav:ELIMINADO})
})
module.exports = router