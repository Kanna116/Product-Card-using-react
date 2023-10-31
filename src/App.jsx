import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Product from './components/Product'
import data from './ProductData'
import './App.css'



function App() {
  const allProducts = data.map(item => {

    return (

      <Product
        key={item.id}
          {...item}
      />
    )
  })

  return (
    <div className='app'>
      {allProducts}
    </div>
  )
}

export default App
