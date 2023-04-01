const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

const getCharDetail= (req,res) => {
 const {id} = req.params
axios.get(`${URL}/${id}`)
.then((response) =>{
const {id,name,species,image,gender,origin}= response.data
res.status(200).json({id,name,species,image,gender,origin})})
.catch((error)=>{
res.status(500).json({message:error})
})
}

module.exports= getCharDetail 