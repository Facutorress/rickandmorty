export const ADD_FAVORITE= "ADD_FAVORITE"
export const REMOVE_FAVORITE= "REMOVE_FAVORITE"

export const addFavorites= (character) =>{
  return {type:ADD_FAVORITE,payload:character}
}

export const removeFavorites= (id)=>{
  return{type:REMOVE_FAVORITE,payload:id}
}