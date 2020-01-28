import React, {useState} from 'react';
import {Formik, Form, Field} from 'formik';
import Counter from './components/Counter';

import {validateFirstname} from './validate/firstname';
import {validationSchema} from './validate/validationSchema';

import './App.css';

const App = () => {

  // const [submitted, setSubmit] = useState(false);
  // const [firstname, setFirstname] = useState('');
  const [state, setState] = useState({submitted: false, firstname: ''});

  return (
    <div>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
          // setFirstname(values.firstname);
          // setSubmit(true);
          setState({
            ...state, 
            submitted: true, 
            firstname: values.firstname
          })
        }}
      >
        {({errors, touched}) => (
          <Form>
            <div className="field-container">
              <label>First name</label>
              <Field name="firstname" className="field-input" placeholder="First name" validate={validateFirstname} />
              {errors.firstname && touched.firstname && <div className="error-alert" >{errors.firstname}</div>}
            </div>
            <div className="field-container">
              <label>Last name</label>
              <Field name="lastname" className="field-input" placeholder="Last name" />
              {errors.lastname && touched.lastname && <div className="error-alert" >{errors.lastname}</div>}
            </div>
            <div className="field-container">
              <label>Email address</label>
              <Field name="email" className="field-input" placeholder="example@example.com" />
              {errors.email && touched.email && <div className="error-alert" >{errors.email}</div>}
            </div>
            <button type="submit" className="form-submit">Submit</button>
          </Form>
        )}
      </Formik>

      {state.submitted && <Counter firstname={state.firstname}/>}
    </div>
  );
}

export default App;
