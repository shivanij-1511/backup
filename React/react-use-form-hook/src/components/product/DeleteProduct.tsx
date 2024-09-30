import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductService } from '../../services/ProductService';
interface paramTypes
{
    pid:number
}
function DeleteProduct() {
const navigate=useNavigate();
const params=useParams<{pid?:string}>();
const pid=params.pid;
const productId = pid ? parseInt(pid, 10) : undefined;
useEffect(()=>{
    ProductService.deleteProductDetails(productId).then(
      response=>{
        console.log("Deleted:",response.data);
        navigate('/')
      }
    ).catch(error=>{
      console.log(error);     
      navigate('/')
    })
},[productId])
  return (
    <div>
      
    </div>
  )
}

export default DeleteProduct
