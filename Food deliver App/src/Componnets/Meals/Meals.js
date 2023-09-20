import React, {Fragment} from 'react'
import MealsItem from './MealsItem'
import MealsSummery from './MealsSummery'

const Meals = () => {
  return (
    <Fragment>
        <MealsSummery />
        <MealsItem />
    </Fragment>
  )
}

export default Meals