import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function Categories() {

const [categories, setCategories] = useState(null);

async function getCategories(){
  
  try {
    let {data}=await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    setCategories(data.data)
  } catch (error) {
    console.log(error);
    
  }
}

  useEffect(() => {
   getCategories()
  }, [])
    
  return <>
    
    <h2 className="pb-5 text-5xl flex justify-center text-mainColor">Categories</h2>
    <div className="flex flex-wrap justify-center">
      {categories?.map((category,index)=>(
        <div key={index} className='p-2 w-1/4 product '>
          <div className='h-[400px]'>
          <img src={category.image} alt={category.name} className='w-full h-full ' />
          </div>

          <h2 className='text-mainColor py-2 text-xl'>{category.name}</h2>

          
         
      </div>))}
    </div>
  
  </>
}
