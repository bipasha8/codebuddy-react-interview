// import React from 'react';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Form1() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailErr, setEmailErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});

  const onSubmit = e => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      const data = new FormData(event.target);
      setEmail('');
      setPassword('');
      history.push('/form2');
    }
  };

  const formValidation = () => {
    const emailErr = {};
    const passwordErr = {};
    let isValid = true;

    if (!email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
      emailErr.emailValid = 'Enter a valid email';
      isValid = false;
    }

    if (
      !password.match(
        /^(?=.*?[A-Z]{2,})(?=.*?[a-z]{2,})(?=.*?[0-9]{2,})(?=.*?[#?!@$%^&*-]{2,}).{8,}$/,
      )
    ) {
      passwordErr.passwordValid = 'Enter a valid password';
      isValid = false;
    }

    setEmailErr(emailErr);
    setPasswordErr(passwordErr);

    return isValid;
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="email" className="label-control">
        Email
      </label>

      <input
        type="email"
        id="email"
        className="input-control"
        name="email"
        onChange={e => {
          setEmail(e.target.value);
        }}
      />
      <br />

      {Object.keys(emailErr).map(key => (
        <div style={{ color: 'red' }}>{emailErr[key]}</div>
      ))}
      <label htmlFor="password" className="label-control">
        Password
      </label>

      <input
        type="password"
        id="password"
        className="input-control"
        name="password"
        onChange={e => {
          setPassword(e.target.value);
        }}
      />
      <br />
      {Object.keys(passwordErr).map(key => (
        <div style={{ color: 'red' }}>{passwordErr[key]}</div>
      ))}

      <button type="submit" disabled>
        Back
      </button>
      <button type="submit">Save</button>
      <button type="submit">Save & Next</button>
    </form>
  );
}

export default Form1;
