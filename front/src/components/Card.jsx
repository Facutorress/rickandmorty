import style from "./Card.module.css";
import { Link } from "react-router-dom";
import {connect} from "react-redux"
import { addFavorites,removeFavorites } from "../redux/actions";
import { useState, useEffect } from "react";

 function Card({id,name,gender,species,image,onClose,addFavorites,removeFavorites,myFavorites}) {
  const [isFav,setIsFav]=useState(false)
  const handleFavorite= ()=>{
    if(isFav){setIsFav(false)
    removeFavorites(id)}
    else
    setIsFav(true)
    addFavorites({id,name,gender,species,image,onClose,myFavorites})
  }
  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);
  return (
    <div className={style.div}>
      {isFav ?(
        <button onClick={handleFavorite}></button>):(
        <button onClick={handleFavorite}></button>
      )}
      <button onClick={() =>onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <h2 className={style.h2}>{name}</h2>
      </Link>
      <div>
        <img className={style.img} src={image} height="250px" alt="" />
        <h2 className={style.h2a}>{species}</h2>
        <h2 className={style.h2a}>{gender}</h2>
      </div>

    
    </div>
  );
}
const mapDispatchToProps =(dispatch)=>{
return{
  addFavorites:(character)=>dispatch(addFavorites(character)),
  removeFavorites:(id)=>dispatch(removeFavorites(id))
}
}
const mapStateToProps=(state)=>{
  return {
myFavorites:state.myFavorites
}}
export default connect(mapStateToProps,mapDispatchToProps)(Card)
