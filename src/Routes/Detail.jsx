import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'


const Detail = () => {

    const {odontologos, themeState} = useContextGlobal()
  
    const [odon, setOdon] = useState({})
    const { id } = useParams()

    useEffect(() => {
      let odontologo=odontologos.find(o => o.id==id)
      setOdon(odontologo)
    })
   
  return (
    <table className={themeState.className}>
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{odon.name}</td>
        <td>{odon.email}</td>
        <td>{odon.phone}</td>
        <td>{odon.website}</td>
      </tr>          
      </tbody>
    </table>
  )
}

export default Detail