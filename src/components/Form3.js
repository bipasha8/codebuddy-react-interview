import { useState } from 'react';
import { Form, Card } from 'react-bootstrap';
import '../App.css';

const Form3 = ({ prevStep, handleFormData, values }) => {
  const [error, setError] = useState(false);

  const [options, setOptions] = useState(['+91', '+1']);

  const [checked, setChecked] = useState(true);

  const handleChange = event => {
    setChecked(event.target.value);
    setOptions(event.target.value);
  };

  const submitFormData = e => {
    e.preventDefault();

    if (values.phoneNumber.match(/^[0-9]{10}$/)) {
      setError(false);
      console.log(values);

      fetch('https://codebuddy.review/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.parse(values),
      })
        .then(res => res.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch(err => {
          console.log('Error:', err);
        });

      // performAPICall();
      // .then(res => console.log("Success:", res.json()));
    } else {
      setError(true);
      // console.log(values.firstName);
      // console.log(values.lastName);
      // console.log(values.address);
    }
  };

  return (
    <div className="container">
      <h3>Contact Details! </h3>
      <Card className="card">
        <Card.Body>
          <Form onSubmit={submitFormData} className="form">
            <Form.Group className="mb-3">
              <div className="contacts-container">
                <select required>
                  {options.map(ele => (
                    <option key={ele}>{ele}</option>
                  ))}
                </select>
                <br />

                <Form.Label className="label-control">Phone Number: </Form.Label>
                <Form.Control
                  style={{ border: error ? '2px solid red' : '' }}
                  name="phoneNumber"
                  defaultValue={values.phoneNumber}
                  type="number"
                  placeholder="phoneNumber"
                  required
                  onChange={handleFormData('phoneNumber')}
                  className="input-control"
                />
                <br />
                {error ? (
                  <Form.Text style={{ color: 'red' }}>Enter a valid Phone Number!</Form.Text>
                ) : (
                  ''
                )}
                <br />

                <label className="label-control">
                  AcceptTermsAndCondition:
                  <input
                    type="checkbox"
                    required
                    defaultChecked={checked}
                    onChange={handleChange}
                  />
                </label>
                <br />
              </div>
            </Form.Group>
            <div className="button-block">
              <button variant="primary" type="submit" onClick={prevStep} className="custom-btn">
                Back
              </button>
              <button
                variant="primary"
                type="submit"
                onClick={handleFormData}
                className="custom-btn"
              >
                Submit
              </button>
              <button variant="primary" type="submit" disabled className="custom-btn">
                Save & Next
              </button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Form3;
