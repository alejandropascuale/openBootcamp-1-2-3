import React, { useState } from 'react'
import PropTypes from 'prop-types'

function ComponentB({ estado }) {
    const [status, setStatus] = useState(estado);
  return (
    <>
        <span>{status === false ? 'Contacto no disponible' : 'Contacto En linea'}</span>
        <button onClick={() => setStatus(!status)}>{status === false ? 'Conectar' : 'Desconectar'}</button>
    </>
  )
}

ComponentB.propTypes = {
    status: PropTypes.bool,
}

export default ComponentB
