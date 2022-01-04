import React from 'react'
import classes from './RegularForm.module.css'

function TextError(props) {

    return (
        <div className={classes.error}>
            {props.children}
        </div>
    )
}

export default TextError
