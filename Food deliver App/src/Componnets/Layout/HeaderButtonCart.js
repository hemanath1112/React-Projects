import React, {Fragment} from 'react'
import classes from "./HeaderButtonCart.module.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const HeaderButtonCart = () => {
  return (
    <Fragment>
      <div className={classes.cart}>
      <span className={classes.logo}><ShoppingBasketIcon /></span>
      <span className={classes.content}>Checkout</span> 
     <span className={classes.item}>3</span> 
    </div> 
    </Fragment>
  )
}

export default HeaderButtonCart