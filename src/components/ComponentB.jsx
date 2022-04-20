import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contact.class'

function ComponentB({ contact }) {
  return (
    <>
        <h1>{ contact.firstName+' '+contact.lastName }</h1>
        <h2>{ contact.email }</h2>
        <h3>{ contact.online ? 'Online' : 'Outline' }</h3>
    </>
  )
}

ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ComponentB
