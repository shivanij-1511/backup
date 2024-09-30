import axios, { AxiosPromise } from "axios";
import { Product } from "../models/Product";

export class ProductService
{
    //Static Data
   /* private static Products:Product[]=[
        {'productName':'Fridge','brandName':'IFB','price':78000},
        {'productName':'AC','brandName':'TATA','price':78000},
        {'productName':'Microwave Oven','brandName':'LG','price':40000},
        {'productName':'Laptop','brandName':'HP','price':82000},
    ]

    public static getAllProductDetails():Product[]
    {
        return this.Products;
    }*/
    private static url:string="http://localhost:3000/products"
    //Data From API
    public static getAllProductDetails()
    {
        return axios.get(this.url)
    }

    public static addProductDetails(product:Product)
    {
        return axios.post(this.url,product)
    }

    public static deleteProductDetails(productId:number|undefined)
    {
        console.log(`${this.url}/${productId}`);
        return axios.delete(`${this.url}/${productId}`)
    }

    public static async getProductDetailsById(productId:number|undefined):Promise<Product>
    {
        const response=await axios.get<Product>(`${this.url}/${productId}`)
        return response.data;
    }

    public static updateProductDetails(productId:number|undefined,product:Product)
    {
        return axios.put(`${this.url}/${productId}`,product);
    }

}