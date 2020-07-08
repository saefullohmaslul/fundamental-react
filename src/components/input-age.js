import React from 'react'

const InputAge = ({ person, changePerson }) => {
  return (
    <>
      <label htmlFor="age">Input Age:</label>
      <input type="text" name="age" value={person.age} onChange={(event) => changePerson(event, 'age')} />
    </>
  )
}

export default InputAge