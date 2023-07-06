

import { ADD_FAV } from "../Actions/types.js";
import { REMOVE_FAV } from "../Actions/types.js";




const initialState={
    myFavorites: [],
    users:[],
    user:{},
    characters:[],
    access:false,
    // allCharacters: [],
}

export default function reducer (state = initialState, action){
    switch (action){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload], detail: {algo: ""} }
            

            case REMOVE_FAV:
                return{
                    ...state,
                    myFavorites: state.myFavorites.filter(fav=>fav.id !== action.payload)
                    };
            default:
                    return {...state}

            
        };


    }




