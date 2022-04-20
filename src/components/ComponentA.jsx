import React from 'react'
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class'
import ComponentB from './ComponentB'

export default function ComponentA({ contact }) {
    
  return (
    <>
        <h1>Nombre y Apellido: { contact.firstName+' '+contact.lastName }</h1>
        <h2>Email: { contact.email }</h2>
        <h3>
            Estado: <ComponentB estado={ contact.online } />
        </h3>
    </>
  )
}

ComponentA.propTypes = {
  contacto: PropTypes.instanceOf(Contact),
};