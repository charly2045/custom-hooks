import { useEffect, useState } from "react";

// Custom hook para gestionar las peticiones http
export const useFetch = ( url ) => {

  // Control estado de la petición
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  // Funcion que recoge la información de la llamada http
  const getFetch = async() => {

    // Ponemos el isLoading a true mientras se procesa la petición
    setState({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();

    // Cambiamos el estado con la respuesta de la petición
    setState({
      // data: data,
      data,
      isLoading: false,
      hasError: null,
    });
  }

  useEffect(() => {
    getFetch();
    return () => {
      
    }
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}
