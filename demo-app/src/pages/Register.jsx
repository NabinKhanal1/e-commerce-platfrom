import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as yup from 'yup'

const Register = () => {
  return (

    <Formik
    initialValues={{firstname:'',lastname:'',email:'',password:'',cpassword:''}}
    validationSchema={yup.object({
        firstname:yup.string()
        .max(20,'must be 20 character or less')
        .required('firstname is mandatory'),

        lastname:yup.string()
        .max(20,'must be 20 character or less')
        .required('lastname is mandatory'),

        email:yup.string()
        .email('inavalid email format')
        .required('email is mandatory'),

        password:yup.string()
        .matches(/(?=.[A-Za-z])(?=.*[0-9])(?=.*[@#$-_?!])[A-Za-z0-9@#$-_?!]{8,50}$/,'must be of minimum 8 characters and contain uppercaase,lowercase,numeric and special cahracters')
        .required('password is mandatory'),

        cpassword:yup.string()
        .required('Confirm password is mandatory')
        .oneOf([yup.ref('password'),null],'password and confirm password must match')


    })}
    >
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 shadow p-3">
                    <Form>
                        <h2 className='text-centerd text-muted'>Register Form</h2>
                        <div className="mb-2">
                            <label htmlFor="firstname">FirstName</label>
                            <Field type="text" name="firstname" id="firstname"
                            className="form-control"/>
                            <ErrorMessage name="firstname">
                                {msg=><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="lasttname">LastName</label>
                            <Field type="text" name="lasttname" id="lastname"
                            className="form-control"/>
                            <ErrorMessage name="lastname">
                                {msg=><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" id="email"
                            className="form-control"/>
                            <ErrorMessage name="email">
                                {msg=><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="passsword" id="password"
                            className="form-control"/>
                            <ErrorMessage name="password">
                                {msg=><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="cpassword">Confirm password</label>
                            <Field type="password" name="cpasssword" id="cpassword"
                            className="form-control"/>
                            <ErrorMessage name="cpassword">
                                {msg=><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <button className='btn btn-primary'>Register</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>

    </Formik>
  )
}

export default Register