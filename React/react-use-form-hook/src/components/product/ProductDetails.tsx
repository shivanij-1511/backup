import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { Product } from '../../models/Product'
import { ProductService } from '../../services/ProductService'
interface IState
{
  "isLodding":boolean,
  "products":Product[],
  "errorMsg":string
}
function ProductDetails() {
    const [state,setState]=useState<IState>(
      {
        "isLodding":false,
        "products":[] as Product[],
        "errorMsg":""
      }
    )
    useEffect(()=>{
      setState({...state,"isLodding":true})
      ProductService.getAllProductDetails().then(res=>{
        setState({...state,"isLodding":false,"products":res.data})
      }).catch(err=>{
        setState({...state,"isLodding":false,"errorMsg":err.message})       
        })
    },[])
  return (
    <div className='container card mt-4'>
      <Link to={'product/add'}>Add New Product</Link>
       {state.isLodding && <h1>Loding.....</h1>}
      {state.errorMsg && <h1>{state.errorMsg}</h1>}
  <table className="table table-info table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Product ID</th>
      <th scope="col">Product Name</th>
      <th scope="col">Brand Name</th>
      <th scope="col">Price</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
       {
        state.products.length>0 && state.products.map(product=>{
            return <tr>
                        <td>{product.id}</td>
                        <td>{product.productName}</td>
                        <td>{product.brandName}</td>
                        <td>{product.price}</td>
                        <td><Link to={`product/delete/${product.id}`}>Delete</Link></td>
                        <td><Link to={`product/edit/${product.id}`}>Edit</Link></td>
                    </tr>
        })
      }
      </tbody>
      </table>
    </div>

  )
}

export default ProductDetails
