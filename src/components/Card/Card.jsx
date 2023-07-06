/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { addFav } from "../../redux/Actions/Actions";
import { removeFav } from "../../redux/Actions/Actions";
import { connect, useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";




function Card ({ id, name, species, onClose,gender,status,origin,image,key, removeFav, addFav, myFavorites}){

const [isFav, setIsFav]= useState (false)// cuando agrego una carta no esta en fav, pro eso el falso

const handleFavorite=() =>{
  if (isFav ){
    setIsFav(false);
    removeFav(id)
  }
  else{
    setIsFav(true);
    addFav({id, name, species,gender,image})
  }
}

useEffect(() => {
  myFavorites.forEach((fav) => {
     if (fav.id === id) {
        setIsFav(true);
     }
  });
}, [myFavorites]);


  return (

  < div className= {style.div}>
    {isFav ? (
      <button onClick={handleFavorite}>🩷</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
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
    
 
    </div>
    </div>
    )}

    
    export function  mapDispatchToProps (dispatch){
      return {
        addFav: function (character){
          dispatch(addFav(character));
        },
        removeFav: function (id){
          dispatch(removeFav(id));
        }
      };
    }
    export function mapStateToProps (state){
      return{
        myFavorites: state.myFavorites
      }
    }
export default connect (mapStateToProps, mapDispatchToProps)(Card)

