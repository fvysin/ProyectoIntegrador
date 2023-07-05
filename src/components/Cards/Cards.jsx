import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";


export default function Cards({characters, onClose}) {

  return (
    <div className={style.div}>
      {characters.map(({id, name, species, gender, status, image, origin}) => (
        <Card
          key={id}
          id={id}
          name={name}
          species={species}
          onClose={onClose}
          gender={gender}
          status={status}
          image={image}
          origin={origin.name}
        
        
        />
      ))}
    </div>
  );
}