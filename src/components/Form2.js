import { useState } from 'react';
import { Form, Card } from 'react-bootstrap';
import '../App.css';

const Form2 = ({ nextStep, prevStep, handleFormData, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = e => {
    e.preventDefault();
    if (
      (values.firstName.match(/^[a-zA-Z]{2,50}$/) || values.firstName === '') &&
      values.address.match(/^.{10,}$/)
    ) {
      setError(false);
      nextStep();
      // console.log('valid');
    }

    if (values.lastName !== '') {
      if (values.lastName.match(/^[a-zA-Z]$/)) {
        setError(false);
        nextStep();
        // console.log('valid');
      }
    } else {
      setError(true);
      // console.log(values.firstName);
      // console.log(values.lastName);
      // console.log(values.address);
    }
  };

  return (
    <div className="container">
      <h3> Personal Details! </h3>
      <Card className="card">
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label className="label-control">First Name: </Form.Label>
              <Form.Control
                style={{ border: error ? '2px solid red' : '' }}
                name="firstName"
                defaultValue={values.firstName}
                type="text"
                placeholder="firstName"
                required
                onChange={handleFormData('firstName')}
                className="input-control"
              />
              <br />
              {error ? (
                <Form.Text style={{ color: 'red' }}>Enter a valid firstName!</Form.Text>
              ) : (
                ''
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="label-control">Last Name: </Form.Label>
              <Form.Control
                style={{ border: error ? '2px solid red' : '' }}
                name="lastName"
                defaultValue={values.lastName}
                type="text"
                placeholder="lastName"
                required={false}
                onChange={handleFormData('lastName')}
                className="input-control"
              />
              <br />
              {error ? <Form.Text style={{ color: 'red' }}>Enter a valid lastName!</Form.Text> : ''}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="label-control">Address: </Form.Label>
              <Form.Control
                style={{ border: error ? '2px solid red' : '' }}
                name="address"
                defaultValue={values.address}
                type="text"
                placeholder="address"
                required
                onChange={handleFormData('address')}
                className="input-control"
              />
              <br />
              {error ? <Form.Text style={{ color: 'red' }}>Enter a valid address!</Form.Text> : ''}
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

export default Form2;
