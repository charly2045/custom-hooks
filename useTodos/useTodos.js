import { useEffect, useReducer } from 'react';
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

// El tercer argumento del reducer es un función que sirve para inicializarlo, en esta ocasión lo usaremos para guardar lo que hay en el locaStorage, de esta forma consegimos que los datos sean persistentes
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []; // Por si fuera 'null' []
}

export const useTodo = () => {

  const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

  // Usamos un useEffect que se dispara con cada nuevo todo, para guardarlos en el localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos )) // no se pueden guardar objetos
  }, [todos])
  

  // Se encarga de crear la nueva acción y mandarla al reducer
  const handleNewTodo = ( todo ) => {
    const action = {
      type: '[TODO] Add todo',
      payload: todo,
    }

    dispatch( action );
  }

  const handleDeleteTodo = ( id ) => {
    dispatch({
      type: '[TODO] Remove todo',
      payload: id
    })
  }

  const handleToggleTodo = ( id ) => {
    dispatch({
      type: '[TODO] Toggle todo',
      payload: id
    })
  }



  return {
    todosCount: todos.length,
    pendingTodosCount: todos.filter( todo => !todo.done).length,
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}
