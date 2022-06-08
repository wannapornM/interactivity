import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Wannaporn',
    lastName: "Dangkum",
    email: "bhr@gmail.com"
  })

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value
    })
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value
    })
  }

  function handleEmailChange() {
    setPerson({
      ...person,
      email: e.target.value
    })
  }

  return (
    <>
      <label>
        First name :
        <input
          className="border"
          value={person.firstName}
          onChange={handleFirstNameChange}
          />
      </label>

      <label>
        Last name :
        <input
          className="border"
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>

      <label>
        Email :
        <input 
          className="border"
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
    </>
  );
}