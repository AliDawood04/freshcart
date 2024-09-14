import React, { useContext } from 'react'
import { useFormik} from 'formik'
import { CartContext } from '../../Context/CartContext'



export default function Checkout() {

let{checkOut}=useContext(CartContext)


let formik =useFormik({
  initialValues:{
    details:'',
    phone:'',
    city:'',
  },
  onSubmit:checkOut
})

    
  return <>
    
 
    <div className="w-1/2 mx-auto py-6 capitalize" >

    <h2 className='text-3xl  mb-4'>Checkout now</h2>
  
      <form onSubmit={formik.handleSubmit}>
            
              

          <div className="relative z-0 w-full mb-5 group">
            
              <input type="text" name="details" id="details" 
              value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} className="inputName peer" placeholder=" " />
              <label htmlFor="details" className="labelName">enter your details</label>
          
          </div>
          

          <div className="relative z-0 w-full mb-5 group">
            
              <input type="tel" name="phone" id="phone"
              value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} className="inputName peer" placeholder=" " />
              <label htmlFor="phone" className="labelName">enter your phone</label>
          
          </div>

          <div className="relative z-0 w-full mb-5 group">
            
              <input type="text" name="city" id="city"
              value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} className="inputName peer" placeholder=" " />
              <label htmlFor="city" className="labelName">enter your city</label>
          
          </div>

            <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Checkout</button>                 
      </form>

    </div>

  </>
}
