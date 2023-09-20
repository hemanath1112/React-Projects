import React from 'react'
import classes from './cart.module.css'

const cart = () => {
    const items =[{id:'c1', name: 'Sushi', amount: 2, price:12.99}]

    const menu= items.map(item=><li>{item.name}</li>)
  return (
    <div>
        <ul>
           {menu}
        </ul>
        <div className={[classes.total]}>
            <span>Total Amount</span>
            <span>35.3</span>
        </div>
        <div className={classes.action}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </div>
  )
}

export default cart