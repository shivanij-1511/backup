import React from 'react'
import { Link,Route,Routes } from 'react-router-dom'
import ProductDetails from '../product/ProductDetails'
import AddProduct from '../product/AddProduct'
import DeleteProduct from '../product/DeleteProduct'
import EditProduct from '../product/EditProduct'
import PageNotFound from './PageNotFound'
function Nav() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={ProductDetails}></Route>

        <Route path='product'>
            <Route path='add' Component={AddProduct}></Route>
            <Route path='delete/:pid' Component={DeleteProduct}></Route>
            <Route path='edit/:pid' Component={EditProduct}></Route>
        </Route>
        <Route path='*' Component={PageNotFound}></Route>

      </Routes>
    </div>
  )
}

export default Nav
