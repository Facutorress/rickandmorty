import Card from "../components/Card"
import { useSelector } from "react-redux"

const Favorites =({id,name,gender,species,image,onClose})=>{
  const favorites= useSelector(state=>state.myFavorites)
  return(

  <>
  {favorites.map((fav)=>{
    return <Card
    id={id}
    name={name}
    species={species}
    gender={gender}
    image={image}
    onClose={onClose}/>
  })}
  </>
)}

export default Favorites