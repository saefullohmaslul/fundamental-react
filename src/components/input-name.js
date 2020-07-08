import React from 'react'

const InputName = ({ person, changePerson }) => {
  console.log(person)
  return (
    <>
      <label htmlFor="name">Input Name:</label>
      <input type="text" name="name" value={person.name} onChange={(event) => changePerson(event, 'name')} />
    </>
  )
}

export default InputName