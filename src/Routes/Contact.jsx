import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Components/utils/global.context'


const Contact = () => {

  const {themeState} = useContextGlobal()

  return (
    <div className={themeState.className}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <br />
      <Form/>
    </div>
  )
}

export default Contact