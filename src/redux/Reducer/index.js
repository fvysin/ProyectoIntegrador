// import {addFavorite, deleteFavorite} from "../Actions/types"

// const initialGlobalState={
//     favorites: [],
//     access: false,
//     characters:[],
// }

// export default function rootReducer (state = initialGlobalState, action){
//                                      // siempre va state priero y luego action
//     switch (action.type){
//         case addFavorite:
//         return {...state,favorites:[...state.favorites.action.payload]}

//         case deleteFavorite:
//             return {...state, favorites:[...state.favorites.filter(favorito=> favorito.id !== action.payload)]}

//         default:
//             return "...state"
//             //si no lo encuentro que me devuelva todo lo del estado
//     }

