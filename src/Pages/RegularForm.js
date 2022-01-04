import { ErrorMessage, Field, Form, Formik, FieldArray } from 'formik'
import React from 'react'
import classes from './RegularForm.module.css';
import * as Yup from 'yup'
import TextError from './TextError';

const initialValues = {
    name: '',
    email: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: []
}
const validationSchema = Yup.object({
    name: Yup.string('Enter Name')
    .required('Name is requird'),
    email: Yup.string('Enter Email')
    .required('Email is required')
    .email('Invalid email format'),
    address: Yup.string('Enter Address')
    .required('Address is required')
    

})
const onSubmit = (values) => {
    console.log(values)
}

function RegularForm() {
    
    return (
        <Formik
        initialValues={initialValues}
        validationSchema = {validationSchema}
        onSubmit={onSubmit}
        >
       <Form>
           <div className={classes['form-control']}>
               <label htmlFor='name'>Name</label>
               <Field type="text" id="name" name="name">
               </Field>
               <ErrorMessage name="name" component={TextError}></ErrorMessage>

           </div>
           <div className={classes['form-control']}>
               <label htmlFor='email'>Email</label>
               <Field type="text" id="email" name="email">
               </Field>
               <ErrorMessage name="email">
                   {errorMsg => <div className={classes.error}>{errorMsg}</div>}
               </ErrorMessage>

           </div>
           <div className={classes['form-control']}>
               <label htmlFor='address'>Address</label>
               <Field name="address">
                   {
                       (props) => {
                           const {field, form, meta} = props
                           return (
                            <div>
                            <input id="address" type="text"  {...field}></input>
                            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                            </div>
                           )
                          
                           
                          
                       }
                   }
               </Field>
              {/*  <ErrorMessage name="address"></ErrorMessage> */}
               <div className={classes['form-control']}>
                   <label htmlFor="facebook">Faceook Profile</label>
                   <Field type="text" name="social.facebook" ></Field>

               </div>
               <div className={classes['form-control']}>
                   <label htmlFor="twitter">Twitter Profile</label>
                   <Field type="text" name="social.twitter" ></Field>

               </div>
               <div className={classes['form-control']}>
                   <label htmlFor="primaryno">Primary Number</label>
                   <Field type="text" name="phoneNumbers[0]" ></Field>

               </div>
               <div className={classes['form-control']}>
                   <label htmlFor="secondaryNo">Secondary Number</label>
                   <Field type="text" name="phoneNumbers[1]" ></Field>

               </div>
               <div className={classes['form-control']}>
                   <label htmlFor="phone">List of phone number</label>
                   <FieldArray name='phNumbers'>
                {fieldArrayProps => {
                  const { push, remove, form } = fieldArrayProps
                  const { values } = form
                  const { phNumbers } = values
                  // console.log('fieldArrayProps', fieldArrayProps)
                  // console.log('Form errors', form.errors)
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type='button' onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                        </div>
                      ))}
                      <button type='button' onClick={() => push('')}>
                        +
                      </button>
                    </div>
                  )
                }}
              </FieldArray>

               </div>


           </div>
           <button type="submit">Submit</button>
       </Form>
       </Formik>
    )
}

export default RegularForm
