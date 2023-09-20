import React from 'react'
import classes from './MealItemForm.module.css'
import Input from "../../UI/input"

const MealItemFrom = () => {
  return (
   <form  className={classes.form} onSubmit={(e)=>e.preventDefault()}>
        <Input
        label='amount'
        input={{
            id:'amount',
            max:'5',
            min:'1',
            step:'1',
            defaultValue:'1'
        }}
        />
        
        <button>+ Add</button>
   </form>
  )
}

export default MealItemFrom