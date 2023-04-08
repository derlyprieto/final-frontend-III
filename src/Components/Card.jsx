import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({odontologo}) => {

  const {favDispatch, themeState} = useContextGlobal()

  const [odon, setOdon] = useState({})

  useEffect(() => {
    setOdon(odontologo)
  })

  const addFav = ()=>{

    favDispatch({type: 'ADD_FAV', payload: odon})
    
  }

  return (
    <div className={themeState.className}>
      <div className="card">
        <img src="./images/doctor.jpg" alt="" />
        <Link to={'/dentist/' + odon.id} key={odon.id}>
          <h2>{odon.name}</h2>
        </Link>
        <h2>{odon.username}</h2>
        <h2>{odon.id}</h2>
        <br/>
        <button onClick={addFav} className="favButton">Add fav</button>
      </div>
    </div>
  
  );
};

export default Card;
