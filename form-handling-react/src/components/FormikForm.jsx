import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
});

const FormikForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form submitted with Formik:', values);
    
    // Simulate API call
    setTimeout(() => {
      alert('Registration successful with Formik!');
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="formik-form">
          <h2>Registration Form (Formik)</h2>
          
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <Field
              type="text"
              id="username"
              name="username"
              className={errors.username && touched.username ? 'error' : ''}
              placeholder="Enter your username"
            />
            <ErrorMessage name="username" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              className={errors.email && touched.email ? 'error' : ''}
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              id="password"
              name="password"
              className={errors.password && touched.password ? 'error' : ''}
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
