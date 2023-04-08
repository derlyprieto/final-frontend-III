import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {favState, themeState} = useContextGlobal()

  return (
    <div className={themeState.className}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favState.map(odon => (<Card key={odon.id} odontologo ={odon}/>))}
      </div>
    </div>
  );
};

export default Favs;
