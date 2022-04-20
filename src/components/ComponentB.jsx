import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contact.class'

function ComponentB({ estado }) {
    const [state, setState] = useState(estado);
  return (
    <>
        <span>{state === false ? 'Contacto no disponible' : 'Contacto En linea'}</span>
        <button onClick={() => setState(!state)}>{state === false ? 'Conectar' : 'Desconectar'}</button>
    </>
  )
}

ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ComponentB
