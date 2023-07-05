import './App.module.css';
import About from './components/About/About';
import axios from 'axios';
import Cards from "./components/Cards/Cards.jsx";
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
// import Home from './components/Home/Home.jsx';
import Nav from "./components/NavBar/Nav";
// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {useState} from "react";
import validation from './components/Form/validation.js';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function App() {
  
  const tituloStyle = {
      color: "blue",
      fontFamily: "Bradley Hand",
      fontSize: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };

   const [characters, setCharacters]= useState([]);
  
   const location = useLocation();

   const [access, setAccess]= useState(false)
   
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '123456f';

   const navigate = useNavigate();
   
   useEffect(() => {
    !access && navigate('/');
 }, [access]);

   

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
          const { data } = response; // Obtener directamente la propiedad 'data' de la respuesta
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('¡No hay personajes con este ID!');
          }
        })
        .catch((error) => {
          console.error(error);
          window.alert('Error al buscar el personaje.');
        });
    }
  
   
   function onClose(id){
    const charactersFiltered = characters.filter(character=>
     character.id!== Number(id))
     setCharacters(charactersFiltered)
     
     
    }
    
  
    

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}
  
    
    return (
      <div className="App">
        <h1 style={tituloStyle}> </h1>
        
        {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
        {/* es para crear el renderizado condicional,
        si la primer parte es true, hace lo de la nav onSearch */}
    
           {location.pathname === "/" && <Form login ={login}/>}
        <Routes>
          <Route>
            <Route exact path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route exact path="/about" element={<About />} />
          </Route>
            <Route exact path="/detail/:id" element={<Detail />} />
          
      </Routes>
    </div>
     
  );
}



export default App;

