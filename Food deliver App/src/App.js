import React, {Fragment} from 'react'
import Header from './Componnets/Layout/Header'
import './App.css'
import Meals from './Componnets/Meals/Meals'

const App = () => {
  return (
    <Fragment >
      <Header />
      <Meals />
    </Fragment> 
  )
}

export default App