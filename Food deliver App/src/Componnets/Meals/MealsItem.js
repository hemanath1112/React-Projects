import React from 'react'
import classes from "./MealsItem.module.css"
import Cart from '../UI/Cart'
import MealItem from './MealItem/MealItem'


const MealsItem = () => {
    const MealsItems =[
        {
            id:1,
            name:"Sushi",
            description:" Finest fish and veggies",
            price: 22.99
        },
        {
            id:2,
            name:"Idly",
            description:" Helathy Food for every morrning",
            price: 20.11
        },
        {
            id:3,
            name:"Schnitzel",
            description:" A german specialty!",
            price: 22.99
        },
        {
            id:4,
            name:"Dosaa",
            description:" Take dosaa happy night",
            price: 15.99
        },
    ]


    const menuItem = MealsItems.map((item)=> 
    <MealItem 
        key={item.id} 
        name={item.name} 
        description={item.description} 
        price={item.price}
    />)
    
  return (
   <section className={classes.meals}>
    <Cart>
        <ul >
            {menuItem} 
        </ul>
    </Cart>
 
   </section>
  )
}

export default MealsItem