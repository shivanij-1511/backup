import axios from 'axios';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/ProductService';
import { SubmitHandler, useForm} from 'react-hook-form';


interface paramTypes
{
    pid:number
}

function EditProduct() {
    const navigate=useNavigate();
    const params=useParams<{pid?:string}>();
    const productId = params.pid ? parseInt(params.pid, 10) : undefined;
    const { register,handleSubmit,formState:{errors,isLoading},setValue,reset} = useForm<Product>()    

useEffect(()=>{
    const fetchProductDetails = async () => {
        try {
          const product = await ProductService.getProductDetailsById(productId);
          // Set default values in the form using setValue
        //   setValue('id', product.id);
        //   setValue('productName', product.productName);
        //   setValue('brandName', product.brandName);
        //   setValue('price', product.price);
        reset(product)
        } catch (error) {
          console.error('Error fetching product details:', error);
        }
      };
  
      fetchProductDetails();
    }, [productId, setValue]);
    
    const UpdateProductSetails:SubmitHandler<Product>=async (product:Product):Promise<void>=>{
        console.log("Data:",product); 
        try{       
        await ProductService.updateProductDetails(productId,product);
        navigate('/')
        }
        catch(error)
        {
            console.error(error);
            navigate('/')    
        }
     }
  return (
    <div className="w-50 container">
    <form className='card mt-4 p-4' onSubmit={handleSubmit(UpdateProductSetails)} >
                <h1>!!!Add Product Details!!!</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Product Name</label>
                    <input type="text" className="form-control" {...register('productName',{required:true})}/>
                    {errors.productName && errors.productName.type=='required' && <span>Product Name can't be blank</span>} 

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

export default EditProduct
