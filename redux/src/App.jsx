import React from 'react'
import Header from './container/Header'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ProductListing from './container/ProductListing'
import ProductDetail from './container/ProductDetail'
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<ProductListing/>}/>
        <Route path='/product/:productId/' element={<ProductDetail/>}/>
        <Route>404 not found!</Route>
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App