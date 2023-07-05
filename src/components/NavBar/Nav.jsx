
import React from "react";
import style from "./Nav.module.css";
import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav({ onSearch, random }) {
  return (
    <div className={style.nav}>
      <Link to='/home'className={style.links}> HOME </Link>
      <Link to='/about' className={style.links}> ABOUT </Link>
      <SearchBar onSearch={onSearch} random = {random}/>
    
    </div>
      
          )
        }

 
 

