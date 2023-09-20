import React from 'react'
import classes from './MealItem.module.css'
import MealItemFrom from './MealItemFrom'

const MealItem = (props) => {
  return (
    <div>
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>{`$${props.price}`}</p>
            </div>
            <div>
                <MealItemFrom />
            </div>
        </li>
    </div>
  )
}

export default MealItem