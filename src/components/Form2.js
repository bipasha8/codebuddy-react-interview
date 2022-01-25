import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Form2() {
  const history = useHistory('');

  const redirectBackward = () => {
    history.push('/form1');
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');

  const [firstNameError, setFirstNameErr] = useState({});
  const [lastNameErr, setlastNameErr] = useState({});
  const [addressErr, setAddressErr] = useState({});

  const onSubmit = e => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      const data = new FormData(event.target);
      setFirstName('');
      setLastName('');
      setAddress('');
      history.push('/form3');
    }
  };

  const formValidation = () => {
    const firstNameError = {};
    const lastNameErr = {};
    const addressErr = {};
    let isValid = true;

    if (!firstName.match(/^[a-zA-Z]{2,50}/)) {
      firstNameError.firstnameValid = 'Enter a valid First name';
      isValid = false;
    }

    if (lastName !== undefined) {
      if (!lastName.match(/^[a-zA-Z]/)) {
        lastNameErr.lastnameValid = 'Enter a valid Last name';
        isValid = false;
      }
    }

    if (!address.match(/^.{10,}/)) {
      addressErr.addressValid = 'Enter a valid address';
      isValid = false;
    }

    setFirstNameErr(firstNameError);
    setlastNameErr(lastNameErr);
    setAddressErr(addressErr);
    return isValid;
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="fName" className="label-control">
        First Name
      </label>

      <input
        type="text"
        id="fName"
        className="input-control"
        name="fName"
        onChange={e => {
          setFirstName(e.target.value);
        }}
      />
      <br />

      {Object.keys(firstNameError).map(key => (
        <div style={{ color: 'red' }}>{firstNameError[key]}</div>
      ))}
      <label htmlFor="lName" className="label-control">
        Last Name
      </label>

      <input
        type="text"
        id="lName"
        className="input-control"
        name="lName"
        onChange={e => {
          setLastName(e.target.value);
        }}
      />
      <br />
      {Object.keys(lastNameErr).map(key => (
        <div style={{ color: 'red' }}>{lastNameErr[key]}</div>
      ))}

      <label htmlFor="adr" className="label-control">
        Address
      </label>

      <input
        type="text"
        id="adr"
        className="input-control"
        name="adr"
        onChange={e => {
          setAddress(e.target.value);
        }}
      />
      <br />
      {Object.keys(addressErr).map(key => (
        <div style={{ color: 'red' }}>{addressErr[key]}</div>
      ))}
      <button type="submit" onClick={redirectBackward}>
        Back
      </button>
      <button type="submit">Save</button>
      <button type="submit">Save & Next</button>
    </form>
  );
}
