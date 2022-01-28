import { useState } from 'react';
import { Form, Card } from 'react-bootstrap';
import '../App.css';

const Form1 = ({ nextStep, handleFormData, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = e => {
    e.preventDefault();
    if (
      values.email.match(
        /^([a-zA-Z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/,
      ) &&
      values.password.match(
        /^(?=(.*\d){2})(?=(.*[a-z]){2})(?=(.*[A-Z]){2})(?=(.*[!@#$%]){2}).{8,}$/,
      )
    ) {
      setError(false);
      nextStep();
      // console.log('valid');
    } else {
      setError(true);
      // console.log(values.email);
      // console.log(values.password);
    }
  };

  return (
    <div className="container">
      <h3>Sign up!</h3>
      <Card className="card">
        <Card.Body>
          <Form onSubmit={submitFormData} className="form">
            <Form.Group className="mb-3">
              <Form.Label className="label-control">Email: </Form.Label>
              <Form.Control
                style={{ border: error ? '2px solid red' : '' }}
                name="email"
                defaultValue={values.email}
                type="email"
                placeholder="Email Id"
                required
                onChange={handleFormData('email')}
                className="input-control"
              />
              <br />
              {error ? <Form.Text style={{ color: 'red' }}>Enter a valid email id!</Form.Text> : ''}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="label-control">Password: </Form.Label>
              <Form.Control
                style={{ border: error ? '2px solid red' : '' }}
                name="password"
                defaultValue={values.password}
                type="password"
                placeholder="Password"
                required
                onChange={handleFormData('password')}
                className="input-control"
              />
              <br />
              {error ? <Form.Text style={{ color: 'red' }}>Enter a valid password!</Form.Text> : ''}
            </Form.Group>
            <div className="button-block">
              <button variant="primary" type="submit" disabled className="custom-btn">
                Back
              </button>
              <button
                variant="primary"
                type="submit"
                onClick={handleFormData}
                className="custom-btn"
              >
                Save
              </button>
              <button
                variant="primary"
                type="submit"
                onClick={handleFormData}
                className="custom-btn"
              >
                Save & Next
              </button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Form1;
