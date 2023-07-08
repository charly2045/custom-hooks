import { useState } from "react";

// Custom hook 
export const useCounter = ( initialValue = 10) => {

  const [ counter, setcounter ] = useState( initialValue )

  // -Funciones del contador-

  // Para poder incrementar en diferentes valores, recivimos dicho valor por argumento
  const increment = ( value = 1 ) => {
    setcounter( counter + value );
  }
  
  const decrement = ( value = 1 ) => {
    // Tambien poner limitadores al valor
    if ( counter === 0) return;

    setcounter( counter - value );
  }

  const reset = () => {
    setcounter( initialValue );
  }

  return {
    // counter: counter (al ser iguales la llave y el valor se simplifica)
    counter,
    increment,
    decrement,
    reset,
  }
}