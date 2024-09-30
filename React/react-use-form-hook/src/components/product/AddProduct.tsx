import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductService } from '../../services/ProductService';
import { Product } from '../../models/Product';
import { SubmitHandler, useForm} from 'react-hook-form';
import { log } from 'console';
//Shift as model in another file
/*interface Product {

    productName: string,
    brandName: string,
    price: number
}*/
function AddProduct() {
    const navigate=useNavigate();
    const { register, handleSubmit ,watch,formState:{errors}} = useForm<Product>(
        {
            defaultValues:{
                "productName": "",
                "brandName": "",
                "price": 0,
            }    
        }
    )    
    // console.log(watch());
    console.log(watch('productName'));

    const addProductDetails:SubmitHandler<Product>=(data)=>{
        console.log(data);
        ProductService.addProductDetails(data).then(
            response=>{console.log(response);
                navigate('/')
            })
            .catch(error=>{
                console.log(error);
                navigate('/')
            })       
    }
    return (
        <div className="w-50 container">
            <form className='card mt-4 p-4' onSubmit={handleSubmit(addProductDetails)} >
                <h1>!!!Add Product Details!!!</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Product Name</label>
                    <input type="text" className="form-control" {...register('productName',{required:true})}/>
                    {errors.productName && errors.productName.type=='required' && <span>Product Name can't be 
blank</span>} 

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Brand Name</label>
                    <input type="text" className="form-control"  
                    {...register('brandName',{required:true})} />
                    {errors.brandName && errors.brandName.type=='required' && <span>Brand Name can't be blank</span>}

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
                    <input type="number" className="form-control" 
                        {...register('price',{required:true,min:1000})} />
                    {errors.price && errors.price.type=='required' && <span>Price can't be blank</span>} 
                    {errors.price && errors.price.type=='min' && <span>Price must be greater than 1000</span>} 
                </div>

                <button type="submit" className="btn btn-info" >Add Product</button>

            </form>

        </div>

    )
}

export default AddProduct
