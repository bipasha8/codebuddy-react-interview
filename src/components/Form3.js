// import React from 'react';

// import { data } from 'msw/lib/types/context';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Form3() {
  const history = useHistory();

  const redirectBackward = () => {
    history.push('./form2');
  };

  const [options, setOptions] = useState(['+1', '+91']);

  const [phn, setPhn] = useState('');
  const [checked, setChecked] = useState(true);

  const [phnErr, setPhnErr] = useState({});

  const apiCall = async () => {
    try {
      const res = await (await fetch('https://codebuddy.review/submit'),
      {
        method: 'POST',
        body: JSON.stringify(data),
      }).json();
    } catch (err) {
      console.log('Error:', err);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      const data = new FormData(event.target);
      setPhn('');
      history.push('/submit');
      apiCall();
    }
  };

  const formValidation = () => {
    const phnErr = {};

    let isValid = true;

    if (!phn.match(/^[0-9]{10}/)) {
      phnErr.phnValid = 'Enter a valid number';
      isValid = false;
    }

    setPhnErr(phnErr);
    return isValid;
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <select>
        {options.map((ele, index) => (
          <option key={index}>{ele}</option>
        ))}
      </select>
      <br />

      <input
        required
        id="phnumber"
        name="phnumber"
        onChange={e => {
          setPhn(e.target.value);
        }}
      />
      <br />
      {Object.keys(phnErr).map(key => (
        <div style={{ color: 'red' }}>{phnErr[key]}</div>
      ))}
      <label>
        <input
          type="checkbox"
          required
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
      </label>
      <br />
      <button type="submit" onClick={redirectBackward}>
        Back
      </button>
      <button type="submit">Save</button>
      <button type="submit" disabled>
        Save & Next
      </button>
    </form>
  );
}

export default Form3;
