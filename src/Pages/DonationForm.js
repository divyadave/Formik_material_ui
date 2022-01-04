import { Card, CardContent, Grid, Button, CircularProgress,  makeStyles, Typography } from '@material-ui/core'
import { Field, FieldArray, Form, Formik } from 'formik'
import { CheckboxWithLabel,  TextField } from 'formik-mui'
import React from 'react'
import { boolean, object } from 'yup'
import { ValidationError } from 'yup'
import { array } from 'yup'
import { number } from 'yup'
import { string } from 'yup'

const emptyDonation = { institution: '', percentage: 0 };

const useStyles = makeStyles((theme) => {
    return {
        changeColor : {
            color: '#cccc'
        },
        errorMain: {
            color: theme.palette.error.main

        },
        stretch: {
            flexGrow: 1
        }
    }
})

function DonationForm() {
    const classes = useStyles();
    return (
       <Card>
           <CardContent>
               <Formik initialValues={{
                   fullName: '',
                   donationAmount: 0,
                   termsAndConditions: false,
                   donations: [{ institution: '', percentage: ''}]

                }} 
                validationSchema={ object({
                    fullName: string().required('Your name is required').min(2, 'Your name needs to be at least 3 characters').max(10, 'Your name needs to be at most 10 characters'),
                    donationAmount: number().required().min(10),
                    termsAndConditions: boolean().required().isTrue(),
                    donations: array(
                        object({
                            institution: string().required().min(3).max(10),
                            percentage: number().required('percentage is required').min(1, 'percentage needs to be atleast 1').max(100, 'percentage cannot be more than 100')
                        })
                    ).min(1).max(3).test((donations) => {
        
                        const sum = donations?.reduce((acc, curr) => acc + curr.percentage, 0)
                        if(sum != 100) {
                            return new ValidationError(`Percentage should be 100%, you have ${sum}`, undefined, 'donations');
                        }
                        return true

                    })
                    
                    

                })
               

                }
                onSubmit={ async(values) => {
                    console.log(values)
                    return new Promise((res) => 
                    setTimeout(res, 2500));
                }}>
                   {({values, errors, isSubmitting, isValid}) => (
                <Form autoComplete='off'>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                        <Field
                    fullWidth
                    name="fullName"
                    component={TextField}
                    label="Full Name"
                  />
                    
                        </Grid>
                        <Grid item>
                            <Field fullWidth name="donationAmount" type="number" component={TextField} label="Donation Amount"></Field>
                        </Grid>
                        <FieldArray name="donations">
                            {({push, remove}) => (
                            <>
                            <Grid item>
                            <Typography variant="h6">
                          All your donations
                        </Typography>
                            </Grid>
                            {
                                values.donations.map((_, index) => (
                                    <Grid container item key={index} spacing={2}>
                                        <Grid item xs={12} sm="auto" className={classes.stretch}>
                                            <Field fullWidth name={`donations[${index}].institution`} component={TextField} label="Institution"></Field>
                                            

                                        </Grid>
                                        <Grid item xs={12} sm="auto" className={classes.stretch}>
                                        <Field fullWidth name={`donations[${index}].percentage`} component={TextField} label="Percentage"></Field>
                                        </Grid>
                                        <Grid item>
                                        <Button color="primary"  disabled={isSubmitting} variant='contained' onClick={() => remove(index)}>Delete</Button>
                                        </Grid>
                                     
                                    </Grid>
                                ))
                            }
                            <Grid item>
                                {
                                    typeof errors.donations === 'string' ? (
                                        <Typography color="error">{ errors.donations }</Typography>
                                    ) : null
                                }

                            </Grid>
                               <Grid item>
                                        <Button  variant="contained" onClick={() => push(emptyDonation)}>Add Donation</Button>
                                        </Grid>
                            </>
                            )}
                        </FieldArray>
                        <Grid item>
                            <Field name="termsAndConditions" type="checkbox" component={CheckboxWithLabel} Label={{ label: "I accept terms & conditions" , className : errors.termsAndConditions ? classes.errorMain : undefined  }}></Field>
                        </Grid>
                        <Grid item>
                        <Button
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                    color="primary"
                    startIcon={
                      isSubmitting ? (
                        <CircularProgress size="0.9rem" />
                      ) : undefined
                    }
                  >
                    {isSubmitting ? 'Submitting' : 'Submit'}
                  </Button>
                        </Grid>

                    </Grid>
                {/*     <pre>{JSON.stringify({values, errors}, null, 4)}</pre> */}
                  
                </Form>
                   )}
               </Formik>
           </CardContent>
       </Card>
    )
}

export default DonationForm
