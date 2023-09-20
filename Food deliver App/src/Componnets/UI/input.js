import React from 'react'
import classes from './input.module.css'

const Input = (props) => {
  return (
    <div className={classes.input}>
        <label className={classes.label}>{props.label}</label>
        <input  {...props.input} />
    </div>
  )
}

export default Input