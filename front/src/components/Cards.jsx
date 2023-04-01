import Card from "./Card";
import style from "./Cards.module.css";

export default function Cards({characters,onClose}) {
  return (
    <div className={style.div}>
      {characters.map(({id,name,gender,species,image}) => {
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
