import React, { useEffect, useState } from 'react'
import style from './CategorySlider.module.css'
import Slider from "react-slick";
import axios from 'axios';

export default function CategorySlider() {


  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows:false,
    autoplaySpeed:500,
    autoplay:true,
  };
    
  const [categorySlider, setCategorySlider] = useState([])

  async function getRecentCategorySlider(){

    try{
      let {data}=await axios.get('https://ecommerce.routemisr.com/api/v1/categories')

    setCategorySlider(data.data)
    }catch(err){
      console.log(err)
    }
  }
    

  useEffect(()=>{

    getRecentCategorySlider()

  },[])

  return <>
        <Slider {...settings}>
        {categorySlider?.map((categorySd,index)=> <div key={index} className='my-4'>
          <img src={categorySd.image}  className='w-full h-[200px] ' alt="" />
          <h3>{categorySd.name}</h3>
        </div> )}
     </Slider>
  
  </>
}
