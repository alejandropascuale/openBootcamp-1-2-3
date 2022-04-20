import React from 'react'
import { Contact } from '../models/contact.class'
import ComponentB from './ComponentB'

export default function ComponentA() {

    const defaultUser = new Contact('Alejandro', 'Pascuale', 'alegpascuale@gmail.com', true);

  return (
    <>
     <ComponentB contact={defaultUser} /> 
    </>
  )
}
