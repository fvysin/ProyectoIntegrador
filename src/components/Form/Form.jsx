
import style from "./Form.module.css"
import { useState } from "react";
import React from "react";
import validation from "./validation";

export default function Form(props){
    const [userData, setUserData]= useState({
        email: " ", 
        password:""
    })

    function handleChange(event){
        setUserData ({...userData, [event.target.name]:event.target.value})
        setErrors(validation({...userData, [event.target.name]:event.target.value}))


    }

    
    function handleSubmit(event){
      event.preventDefault();
      props.login(userData);

    }

    
    const [errors, setErrors] = useState({})


    return(

    <form onSubmit={handleSubmit}>
      <div className={style.input}>

        <div className={style.gridRow}>
          <label className={style.nombres}>Email</label>
          <input 
          type="email" 
          className={style.emailbox} 
          name = "email" 
          value = {userData.email} 
          onChange={handleChange}/>
        </div>
          <p>{errors.email}</p>

        <div className={style.gridRow}>
          <label className={style.nombres}>Password</label>
          <input 
          type="password" 
          className={style.emailbox} 
          name="password" 
          value = {userData.password} 
          onChange={handleChange}/>
        </div>
        <p className={style.error}>{errors.password && errors.password}</p>
      </div>
    

      <input className={style.button} type="submit" value="Submit" />
    </form>
  );
}
