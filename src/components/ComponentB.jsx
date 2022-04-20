import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contact.class'

function ComponentB({ estado }) {
  return (
    <>
        <span>{ estado ? 'Contacto En Línea' : 'Contacto No Disponible' }</span>
    </>
  )
}

ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ComponentB
