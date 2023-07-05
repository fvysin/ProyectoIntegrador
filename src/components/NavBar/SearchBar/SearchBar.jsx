import React, { useState } from 'react';
import style from "./SearchBar.module.css";


export default function SearchBar({onSearch}) {
  
  
  const [id, setId]= useState("");

  const handleChange = (evento)=>{
    
    setId(evento.target.value)
  }


  return (
    <div className={style.div}>
      <input 
       className= {style.input} 
       type="text" 
       placeholder="Busca un personaje" 
       onChange={handleChange}
       value={id}
      />

      <button 
      className ={style.button} 
      onClick={()=>{
        onSearch(id);
      }}
        >Agregar
      </button>
      
    </div>
  );
}