import React, { useContext, useState } from 'react'
import style from './Products.module.css'
import Loding from '../Loding/Loding'
import { Link } from 'react-router-dom'
import useProducts from '../../hooks/useProducts'
import { CartContext } from '../../Context/CartContext'

export default function Products() {

  let {addProductToCart}=useContext(CartContext);
  let {data,isError,isFetching,isLoading,error}=useProducts()

  
    return <>
    <h2 className=' pb-5 text-5xl flex justify-center text-mainColor'>Products</h2>
    {!isLoading?<div className='flex flex-wrap '>
      {data.map((product)=><div key={product.id} className='w-1/3 '>
    <div className=" p-3 product  ">
  
          <Link to={`/productdetails/${product.id}`}>
              <img  className="w-full " src={product.imageCover} alt={product?.title} />
                <h2 className='text-mainColor text-sm'>{product.category.name}</h2>
                <h2 className='font-medium'>{product.title.split(' ').slice(0,8).join(' ')}</h2>
  
                <div className="flex justify-between my-2">
                  <h3 className=''>{product.price}EGP</h3>
                  <h3><i className='fas fa-star text-yellow-400'>{product?.ratingsAverage}</i></h3>
                </div>
          </Link>
        
                <button onClick={()=>addProductToCart(product.id)} className='btn text-white bg-mainColor w-full rounded py-1'>Add to cart</button>
  
      </div>
    </div>)}
    </div>: <div className="flex justify-center"><Loding/></div> }
    </>
}
