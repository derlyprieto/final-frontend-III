import React, { useState } from "react";
import { useContextGlobal } from "./utils/global.context";


const Form = () => {

  const {themeState} = useContextGlobal()

  const [user, setUser] = useState({
    name: "",
    email: ""
  })

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false) 

  const handleSubmit = (event) => {
    event.preventDefault()
    if(user.name.length >= 5 && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user.email)){
      setShow(true)
      setErr(false)
    } else setErr(true)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={themeState.className}>
        <label>Nombre completo</label>
        <input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}/>
        <label>Email</label>
        <input type="mail" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
        <br/>
        <button>Enviar</button>
      </form>
      <br />
      {err && <h3>Por favor verifique su información nuevamente</h3>}
      {show && <h3>Gracias {user.name},te contactaremos cuanto antes vía mail</h3>}

   </div>
  );
};

export default Form;
