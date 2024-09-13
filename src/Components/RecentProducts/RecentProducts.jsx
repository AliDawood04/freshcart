import React, { useContext } from 'react'
import style from './RecentProducts.module.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loding from '../Loding/Loding';





export default function RecentProducts({product}) {


  let {addProductToCart}=useContext(CartContext);

function getProducts(){
  return axios.get('https://ecommerce.routemisr.com/api/v1/products')
}


 let {data,isFetching,isLoading,isError,error}= useQuery({
    queryKey : ['recentProduct'],
    queryFn : getProducts,
    gcTime:4000
  })
console.log(data?.data.data);


  return <>
  <h2 className='text-5xl flex justify-center text-mainColor py-10'>Recent Products</h2>

  {data?.data.data.length?<div className='flex flex-wrap '>
      {data?.data.data.map((product)=>
      <div key={product.id} className="w-1/5 p-1">

          <div className=" p-3 product  ">

            <Link to={`/productdetails/${product.id}`}>
                <img  className="w-full " src={product?.imageCover} alt={product?.title} />
                  <h2 className='text-mainColor text-sm'>{product?.category.name}</h2>
                  <h2 className='font-medium'>{product?.title.split(' ').slice(0,2).join(' ')}</h2>

                  <div className="flex justify-between my-2">
                    <h3 className=''>{product?.price}EGP</h3>
                    <h3><i className='fas fa-star text-yellow-400'>{product?.ratingsAverage}</i></h3>
                  </div>
            </Link>

                  <button onClick={()=>addProductToCart(product.id)} className='btn text-white bg-mainColor w-full rounded py-1'>Add to cart</button>
          </div>
      </div>)}
      
    
  </div>:<div className="flex justify-center"><Loding/></div>}


  </>
}
