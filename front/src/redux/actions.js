import axios from "axios"
export const ADD_FAVORITE="ADD_FAVORITE"
export const REMOVE_FAVORITE= "REMOVE_FAVORITE"
export const GET_FAVORITES= "GET_FAVORITES"

 export const removeFavorite= (id)=>{
  return {type:REMOVE_FAVORITE,payload:id}
 }

export const getFavorites=()=>{
  return async function (dispatch){
  const response= await axios.get("http://localhost:3001/rickandmorty/fav")
  dispatch({type:GET_FAVORITES,payload:response.data})
}
}
