import React, { useState } from 'react'
import style from './Categories.module.css'
import axios from 'axios';

export default function Categories() {

const [state, setstate] = useState();

async function getCategories(){
  
  try {
    let {data}=await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
  } catch (error) {
    console.log(error);
    
  }

}
    
  return <>
    
    <h1 className="text-3xl">Categories</h1>
  
  </>
}
