import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { data } from 'autoprefixer';

export default function brands() {

  const [brands, setBrands] = useState(null);

  
  async function getBrands(){
    
    try {
      let {data}=await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
      setBrands(data.data)
    } catch (error) {
      console.log(error);
      
    }
  
  }
   console.log(data);
    
  useEffect(() => {
    getBrands()

      }, [])
      
    return <>
      <h2 className='pb-5 text-5xl flex justify-center text-mainColor'>Brands</h2>

     <div className='flex flex-wrap '>
      

      {brands?.map((brand,index)=> (<div key={index} className='p-2 w-1/4 product'>
        <img src={brand.image} alt={brand.name} className="w-full "  />
        <h2 className='text-mainColor py-2 text-xl'>{brand.name}</h2>

      </div>))}

      
     </div>

  </>  
}
