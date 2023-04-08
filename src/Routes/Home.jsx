import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {odontologos, themeState} = useContextGlobal()

  return (
    <main className={themeState.className} >
      <h1>Home</h1>
      <div className='card-grid'>
      {odontologos.map(odon => (<Card key={odon.id} odontologo ={odon}/>))}
      </div>
    </main>
  )
}

export default Home