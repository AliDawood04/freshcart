import React, { useEffect, useState } from 'react'
import style from './Brands.module.css'
import axios from 'axios';

export default function Brands() {

  const [brands, setBrands] = useState(null);

  
  async function getCategories(){
    
    try {
      let {data}=await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
      setBrands(data)
    } catch (error) {
      console.log(error);
      
    }
  
  }
    
  useEffect(() => {
    getCategories()

      }, [])
      
    return <>
      <h2 className='pb-5 text-5xl flex justify-center text-mainColor'>Brands</h2>

     <div className='flex flex-wrap'>
      <div className="w-1/4 p-2">

      {brands?.map((brand,index)=> (<div key={index} className='flex'>
        <img src={brand.image} alt="" className="w-full "  />

      </div>))}

      </div>
     </div>

  </>  
}
