const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById= (req,res) => {
 const {id} = req.params
 try {
axios.get(`${URL}/${id}`)
.then((response) =>{
const {id,name,species,image,gender}= response.data
res.status(200).json({id,name,species,image,gender})})}

catch(error){
res.status(500).json({message:error})
}
}
module.exports= getCharById 