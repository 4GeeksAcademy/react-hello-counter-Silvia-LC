import React, { useState } from "react";

const Home = () => {
  const [contador, setContador] = useState(0);
  const setClick= () => {
    setContador(contador + 1);
  };                       
  return (
    <div className="contenedor-contador">
      <h1>Contador: {contador}</h1>
      <button className="boton-contar" onClick={setClick} class="badge text-bg-primary"> Click Here </button>
    </div>
  );
};
export default Home;
