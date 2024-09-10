import React, { useContext, useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Slider from "react-slick";
import Products from '../Products/Products';
import { CartContext } from '../../Context/CartContext';

export default function ProductDetails() {
  let {addProductToCart}=useContext(CartContext);
let {id} =useParams()
const [productDetails, setProductDetails] = useState({});

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  autoplaySpeed:500,
  autoplay:true,
};

async function getProductDetails(id){
let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
console.log(data)
setProductDetails(data.data)
}


  useEffect(()=>{
    getProductDetails(id)
  },[])  



  return <>
    
    <h1 className="text-3xl text-mainColor border-b-mainColor">ProductDetails</h1>
  

    <div className="flex items-center py-10">

      <div className="w-1/4 p-4">

     {productDetails.images>1? <Slider {...settings}>
        {productDetails.images?.map((image,index)=><img src={image} key={index } className='w-full' alt="" /> )}
    </Slider>:<img src={productDetails.imageCover} className='w-full' alt="" />}
    
      </div>


      <div className="w-3/4">
        <div>
            <h2>{productDetails.title} </h2>
            <p className='my-6 text-gray-500'>{productDetails.description}</p>
            <h3>{productDetails.category?.name}</h3>
            <div className="flex justify-between my-2">
                <h3 className=''>{productDetails.price}EGP</h3>
                <h3><i className='fas fa-star text-yellow-400'>{productDetails.ratingsAverage}</i></h3>
            </div>
            <button onClick={()=>addProductToCart(productDetails.id)} className='btn text-white bg-mainColor w-full rounded py-1'>Add to cart</button>

        </div>
      </div>
    </div>
  </>
}
