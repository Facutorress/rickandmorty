import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import axios from "axios"
import { getFavorites, removeFavorite} from "../../redux/actions";
import { useState, useEffect } from "react";
import React from "react";

function Card({
  id,
  name,
  gender,
  species,
  image,
  onClose,
  myFavorites,
}) {
  const dispatch= useDispatch()
  const [isFav, setIsFav] = useState(false);
  const addFavorite =(character)=>{
    axios.post("http://localhost:3001/rickandmorty/fav", character)
    .then((res)=>console.log("ok"))
  }
  const removeFavorite = async (id) => {
   await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
   dispatch(getFavorites())
      alert("Eliminado con exito")
   
  };
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else setIsFav(true);
    addFavorite({ id, name, gender, species, image});
  };
  useEffect(() => {
    if (myFavorites !== undefined) {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
          setIsFav(true);
        }
      });
    }
  }, [myFavorites]);
  return (
    <div className={style.div}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={() => onClose(id)}>X</button>
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
const mapDispatchToProps = (dispatch) => {
  return {
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Card);
