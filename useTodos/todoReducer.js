

export const todoReducer = ( initialState = [], action ) => {


  switch ( action.type ) {
    case '[TODO] Add todo':
      // Retornamos un arreglo con los todos existentes mas el nuevo
      return [ ...initialState, action.payload ];
    
    case '[TODO] Remove todo':
      // Usamos .filter que crea un nuevo arreglo con los elementos que cumplan las condiciones
      return initialState.filter( todo => todo.id !== action.payload );

    case '[TODO] Toggle todo':
      // Usamos .map para cambiar la propiedad done del elemeto que coincida su id
      return initialState.map( (todo) => {

        if ( todo.id === action.payload ) {
          return {
            ...todo,
            done: !todo.done,
          }
        }

        return todo;
      })
  
    default:
      return initialState;
  }
  
}
