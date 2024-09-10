import React, { useState } from 'react'
import style from './Footer.module.css'

export default function Footer() {

const payMethods=[
  {name:'Amazon Pay',src:'https://cdn-icons-png.flaticon.com/512/5968/5968269.png'},
  { name: 'American Express', src: 'https://www.logo.wine/a/logo/American_Express/American_Express-Logo.wine.svg' },
  { name: 'MasterCard', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' },
  { name: 'PayPal', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' }
];

const appStore=[
  {name:'App Store',src:'https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'},
  {name:'Google Play',src:'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg'},
 
]
    
  return <>
    <div className="bg-gray-200 flex flex-col gap-5 md:gap-10 px-4 py-8 text-slate-700 ">
       
        <div className="container">

          <div>
            <h2 className='uppercase p-2 text-mainColor text-3xl'>get the freash cart app</h2>
            <p className='text-xl py-3'>we will send you a link open it your phone to download the app </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center p-2 pt-6">
            <input type="email" placeholder='E-mail...'  className='w-full md:w-5/6 px-3 rounded-md focus:outline-mainColor' />
            <button className='bg-mainColor rounded-md p-2 md:w-48 text-white'>share app link</button>
          </div>

          <div className='flex flex-col md:flex-row justify-between items-center my-10 p-8 '>
            
            <div className="flex items-center">
                <h3 className='text-xl'>Payment Parteners</h3>
                <div className="flex gap-1 cursor-pointer mx-4">
                  {payMethods.map((method,index)=>(<img key={index} src={method.src} className='w-12'/>))}
                </div>
            </div>
            
            <div className="flex ">
                <h3 className='text-xl'>Get deliveries with FreshCart</h3>
                <div className="flex justify-center cursor-pointer mx-4">
                  {appStore.map((app,index)=>(<img key={index} src={app.src}  className='w-24'/>))}
                </div>
            </div>

          </div>


        </div>

    </div>
    
  
  </>
}
