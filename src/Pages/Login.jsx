import React from 'react';
import { Form, Formik, useFormik, Field } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/input.module.css'

function Login(props) {
   
    // const formik = useFormik({initialValues: {email: ''}})
    // console.log(formik.values)
    const SignupSchema = Yup.object().shape({
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    });
    


    return (
        <div>
            <Formik 
            initialValues={
              { email: '', password: ''}
              } validationSchema={SignupSchema}>
              {formik => (
              <Form>
                <label htmlFor="">
                  email
                   <Field 
                    className={styles.input}
                    type="email" name="email"
                    placeholder="Email" />
                </label>
                <label htmlFor=''>
                  password
                  <Field type="password" name="password" placeholder="password" />
                </label>
                <button>Login</button>
              </Form>
                  )}
            </Formik>
        </div>
    );
}

export default Login;