import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card ({ id, name, species, onClose,gender,status,origin,image,key}){
  return (

  < div className= {style.div}>
    <div className={style.imageContainer}>
      <button className = {style.closeButton} onClick={() =>onClose (id)}> X </button>
      <Link to={`/detail/${id}`}>

      <h2 className={style.name}>{name}</h2>
      </Link>
     <img className = {style.image} src ={image} alt={name} />
    </div>
  
  <div className={style.atributos}>
     <h2>{species}</h2>
     <h2>{gender}</h2>
     <h2>{status}</h2>
     {/* <h2>{origin}</h2> */}
</div>
</div>
)}

