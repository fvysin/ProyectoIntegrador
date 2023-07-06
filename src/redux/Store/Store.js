import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk";
import Reducer from "../Reducer/Reducer.js";




const confNavegador = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// es para ver las configuraciones de redux devtools del navegador. SI no quiero no lo hago

const store = createStore (
    Reducer,
    confNavegador (applyMiddleware(thunk))// es para poder hacer peticiones a una api/servidor

    );


export default store;




