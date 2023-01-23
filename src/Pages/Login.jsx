import React from 'react';
import { Form, Formik, useFormik, Field } from 'formik';
import * as Yup from 'yup';

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
            <Formik initialValues={{email: ''}} validationSchema={SignupSchema}>
              {formik => (
              <Form>
                {/* <label htmlFor="">
                  email */}
                  {/* <Field type='email' name='email' placeholder='email' */}
                   <Field type="email" name="email" placeholder="Email" />
                  {/* // onChange={formik.handleChange} */}
                  {/* /> */}
                {/* </label> */}
              </Form>
                  )}
            </Formik>
        </div>
    );
}

export default Login;