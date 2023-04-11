import Card from "./Card";
import style from "./Cards.module.css";
import { useDispatch } from "react-redux";
import { getFavorites } from "../../redux/actions";
import { useEffect } from "react";

export default function Cards({ characters, onClose }) {
  const dispatch = useDispatch();
 
  useEffect(()=>{
    dispatch(getFavorites())
  },[])
  return (
    <div className={style.div}>
      {characters.map(({ id, name, gender, species, image }) => {
        return (
          <Card
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
