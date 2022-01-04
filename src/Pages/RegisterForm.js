import React from 'react'
import { Avatar, Box, Button, Container, CssBaseline, FormHelperText, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup'



const useStyles = makeStyles((theme) => {
    return {
        formInput: {
            marginTop: 40,
        '& p': {
            fontSize: 15
        }
        },
        signupAvatar: {
            margin: 10,
            background: theme.palette.primary.main
        },

    }

}

)

const initialValues = {
    
        name: '',
        email: '',
        password: ''

}
const onSubmit = (values) => {
    console.log('Submitted', values)

}
const validationSchema = Yup.object({
    name: Yup.string('Enter Name')
    .required('Name is requird'),
    email: Yup.string('Enter Email')
    .required('Email is required')
    .email('Invalid email format'),
    password: Yup.string('Enter password')
    .required('Password is required')
    .min(6, 'Minimum 6 characters are required')

    


})
/* const validate = (values) => {
    let errors = {}
    if(!values.name)
    {
        errors.name = '*Name is required'
        
    }
    if(!values.email)
    {
        errors.email = '*Email is required'
        
    }
    else if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(values.email)) {
        errors.email = "*Invalid email format"
    }
    if(!values.password) {
        errors.password = "*Password is required"
    }
    return errors

} */

function RegisterForm() {
    const classes = useStyles()
   /*  const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: validationSchema
    }) */
 
   
    return (

        <Container component="main" fixed>
            <CssBaseline></CssBaseline>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',


            }}>
                <Avatar className={classes.signupAvatar}>
                    <LockOpenOutlined></LockOpenOutlined>
                </Avatar>
                <Typography variant="h5">Sign Up</Typography>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form>
                <Box sx={{ marginTop: 18 }}>
                    <Field name="name"
                    render={({ field }) => {
                    return <TextField label="Name" name="name"
                    variant="outlined" fullWidth
                    className={classes.formInput}  {...field} /> }}>
                    </Field>
                    <ErrorMessage name="name"></ErrorMessage>

                    <Field name="email"
                    render={({ field }) => {
                    return <TextField  className={classes.formInput} label="Email" name="email" variant="outlined"  fullWidth {...field} /> }}>
                    </Field>
                    <ErrorMessage name="email"></ErrorMessage>

                    <Field name="password"
                    render={({ field }) => {
                    return <TextField className={classes.formInput} label="Password" name="password" variant="outlined" fullWidth {...field} /> }}>
                    </Field>
                    <ErrorMessage name="password"></ErrorMessage>
                   
                   {/*  <Field>
                    <TextField {...formik.getFieldProps('email')}   error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.errors.email && formik.touched.email && String(formik.errors.email)} required className={classes.formInput} label="Email" name="email" variant="outlined"  fullWidth></TextField>
                    </Field> */}
                    {/* <Field>
                    <TextField {...formik.getFieldProps('password')} error={formik.touched.password && Boolean(formik.errors.password)} helperText={formik.errors.password && formik.touched.password && String(formik.errors.password)} required className={classes.formInput} label="Password" name="password" variant="outlined" fullWidth></TextField>
                    </Field>  */}
                    <Button type="submit" className={classes.formInput} variant="contained" color="primary" fullWidth>Sign Up</Button>

                </Box>
                </Form>
                </Formik>

            </Box>

        </Container>

    )
}

export default RegisterForm
