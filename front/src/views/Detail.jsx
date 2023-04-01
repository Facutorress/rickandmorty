import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import axios from "axios";

const Detail = () => {
  const { detailid } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    const URL = "http://localhost:3001/rickandmorty/detail";
    axios(`${URL}/${detailid}`).then((response) =>
      setCharacter(response.data)
    );
  }, [detailid]);
  return (
    <div>
      {character.name ? (
        <>
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.origin?.name}</p>
          <img src={character.image} alt=""></img>
        </>
      ) : (
        <h3>loading...</h3>
      )}
    </div>
  );
};
export default Detail;

