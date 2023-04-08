import { createContext, useContext, useEffect, useReducer, useState } from "react";


const ContextGlobal = createContext(undefined);

const themes = {
  dark: {
    className: "dark",
    theme: false,
  },
  light: {
    className: "light",
    theme: true
  }
}

const initialThemeState = themes.light

const themeReducer = (state, action) => {
    switch(action.type){
      case 'SWITCH_DARK':
        return themes.dark 
      case 'SWITCH_LIGHT':
        return themes.light
      default:
        throw new Error;
    }
}

const initialFavState = JSON.parse(localStorage.getItem('favs')) || [] 

const favReducer = (state, action) => {
  switch(action.type){
    case 'ADD_FAV':
      return [...state, action.payload]
    default: 
      throw new Error
  }
}


const ContextProvider = ({ children }) => {

  const [odontologos, setOdontologos] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'
  const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState)
  const [favState, favDispatch] = useReducer(favReducer, initialFavState)


  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favState))
  }, [favState])


  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setOdontologos(data))
  }, [])



  return (
    <ContextGlobal.Provider value={{odontologos, setOdontologos, themeState, themeDispatch, favDispatch, favState}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)
