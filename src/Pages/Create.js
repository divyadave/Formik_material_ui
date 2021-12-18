import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { Button, Container, FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, TextField } from '@material-ui/core'
import { AddCircleOutlined } from '@material-ui/icons'
import axios from '../api/api'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
    title: {
        textAlign: 'left',
        marginTop: 20
    },
    field: {
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'left'

    },
    btn: {
        float: 'left'
    }

})

function Create() {
    const classes = useStyles()
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [errortitle, setTitleError] = useState(false)
    const [errordetails, setDetailsError] = useState(false)
    const [category, setCategory] = useState("todos")
    const history = useNavigate()

   

    const handleSubmit = async () => {

        if (title === "") {
            setTitleError(true)
        }
        if (details === "") {
            setDetailsError(true)
        }
        if (title && details && category) {
            setDetailsError(false)
            setTitleError(false)
            const request = {
                title: title,
                details: details,
                category: category
            }

           axios.post("/notes", request).then(() => {
               history('/')

           })
         
          

        }
    }
    const handleChange = (e) => {
       setCategory(e.target.value)
    }
    return (
        <div>
            <Container>
                <Typography className={classes.title} variant="h6" component="h2" color="textSecondary" gutterBottom>
                    Create Note

                </Typography>
                <form onSubmit={handleSubmit} noValidate autoComplete='off'>
                    <TextField
                        onChange={(e) => setTitle(e.target.value)}
                        className={classes.field}
                        label="Note Title"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        error={errortitle}>

                    </TextField>
                    <TextField
                        onChange={(e) => setDetails(e.target.value)}
                        className={classes.field}
                        label="Note Details"
                        variant="outlined"
                        color="secondary"
                        multiline
                        rows={4}
                        fullWidth
                        error={errordetails}>

                    </TextField>
                    <FormControl component="fieldset" className={classes.field} fullWidth>
                        <FormLabel component="legend">Category</FormLabel>
                        <RadioGroup  className={classes.field} aria-label="category" name="category" value={category} onChange={handleChange}>
                            <FormControlLabel value="money" control={<Radio />} label="Money" />
                            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                            <FormControlLabel value="shopping" control={<Radio />} label="Shopping" />
                        </RadioGroup>
                    </FormControl>
                </form>

                <Button type="submit" onClick={() => handleSubmit()} className={classes.btn} variant="contained" color="primary" startIcon={<AddCircleOutlined></AddCircleOutlined>} disableElevation>Submit</Button>

            </Container>

        </div>
    )
}

export default Create
