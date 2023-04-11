import { useDispatch, useSelector} from "react-redux";
import { getFavorites } from "../redux/actions";
import Card from "../components/cards/Card"
import { useEffect } from "react";

function Favorites() {
  const favorites= useSelector((state)=>state.myFavorites)

  return (
    <>
  {favorites.map(({id,name,gender,species,image})=>{
    return( 
    <Card
    key={id}
    id={id}
    name={name}
    species={species}
    gender={gender}
    image={image}
    />
    )
  })}
  </>
  )
}
export default Favorites