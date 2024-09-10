import React, { useState } from 'react'
import style from './Loding.module.css'
import { DNA } from 'react-loader-spinner'

export default function Loding() {



    
  return <>
    
    <DNA
  visible={true}
  height="300"
  width="300"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
  
  </>
}
