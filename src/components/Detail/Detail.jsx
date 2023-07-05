import React from "react"
import axios from "axios"
import style from "./Detail.module.css"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

export default function Detail(){
    const{id}= useParams();
    
    const [character, setCharacter]= useState({});

   useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);



    return(
      <div className={style.div}>
         <h3>Name:{character.name&& character.name}</h3>
         <h5>Status:{character.status ? character.status: ":(no hay status"}</h5>
         <img src = {character.image} alt = {character.name}/>
         <h5>Species:{character.species}</h5>
         <h5>Gender:{character.gender}</h5>
         <h5>Origin:{character.origin?.name}</h5>

      </div>

     

    )


}

