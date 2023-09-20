import HeaderButtonCart from './HeaderButtonCart'
import {Fragment} from 'react'
import classes from './Header.module.css'



const Header = () => {
  return (
    <Fragment >
        <header className={classes.header}>
            <h2 className={classes.title}>React<span>Meals</span></h2>
            <HeaderButtonCart />
        </header>
        <div >
            <img src="https://assets3.thrillist.com/v1/image/3130793/1584x1188/scale;webp=auto;jpeg_quality=60;progressive.jpg" alt="Foods" className={classes.image} />
        </div>
    </Fragment>
  )
}

export default Header