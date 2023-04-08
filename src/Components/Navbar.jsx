import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {themeState, themeDispatch} = useContextGlobal()

  const switchTheme = () => {
      if(themeState.theme){
        themeDispatch({type: 'SWITCH_DARK'})
      } else {
        themeDispatch({type: 'SWITCH_LIGHT'})
      }
  }

  return (
    <nav>
      <img className="imgsup" src="./images/DH.png" alt='DH-logo'/>
      <Link to='/'><h2>Home</h2></Link>
      <Link to='/contact'><h2>Contacto</h2></Link>
      <Link to='/favs'><h2>Favoritos</h2></Link>
      <button onClick={switchTheme}>{themeState.theme ? 'Dark Theme' : 'Light Theme'}</button>
    </nav>
  )
}

export default Navbar