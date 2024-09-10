import React, { useContext, useState } from 'react'
import style from './Register.module.css'
import { useFormik} from 'formik'
import * as Yup from "yup" 
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'



export default function Register() {


  const [apiError, setApiError] = useState(null)
  const [loading, setLoading] = useState(false)

let {setUserData}= useContext(UserContext)

// ده هووك بيعمل تغيير مسار زي مثلا لما اعمل كليك عالسبميت يوديني للهووم
 let navigate= useNavigate()

 

     //( api called-------------------------------------------)

        async function register(values) {
          
          try {
                  setLoading(true)
                 let {data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)
               
                 localStorage.setItem('userToken',data.token)
                  navigate('/home')
                  setUserData(data.token)
                } catch (err) {

            console.log(err.response.data.message);
            setApiError(err.response.data.message)
            setLoading(false)
          }
            
        }

  // (------end api called_________________________)


  // (yupاختصار للregax--------------)
  let validationSchema=Yup.object().shape({
    name:Yup.string().min(3,"min length is 3").max(10,"max length is 10").required("name is requrid"),
    email:Yup.string().email("invalid email").required("email is requrid"),
    password:Yup.string().matches(/^[A-Z]\w{5,10}$/,"invalid password example Ali2004").required("password is requrid"),
    rePassword:Yup.string().oneOf([Yup.ref('password')]).required("password and rePassword is dont matche"),
    phone:Yup.string().matches(/^(002|\+2)?01[0125][0-9]{8}$/).required(" we need egiptian numper"),
  })
  //( end Yup----------------)
  
let formik =useFormik({
  initialValues:{
    name:'',
    email:'',
    password:'',
    rePassword:'',
    phone:''
  }
  ,
  validationSchema, 
  onSubmit:register
})

    
  return <>
    
 
    <div className="w-1/2 mx-auto py-6 capitalize" >

    <h2 className='text-3xl  mb-4'>register now</h2>
  
      <form onSubmit={formik.handleSubmit}>

      {apiError&&<div className="px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <span className="font-medium">{apiError}</span>
          </div>}

          <div className="relative z-0 w-full mb-5 group">
            
              <input type="text" name="name" id="name"
              value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className="inputName peer" placeholder=" " />
              <label htmlFor="name" className="labelName">enter your name</label>
          
          </div>
          {formik.errors.name&&formik.touched.name&&<div className="px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <span className="font-medium">{formik.errors.name}</span>
          </div>
          }

          <div className="relative z-0 w-full mb-5 group">
            
              <input type="email" name="email" id="email" 
              value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="inputName peer" placeholder=" " />
              <label htmlFor="email" className="labelName">enter your email</label>
          
          </div>
          {formik.errors.email&&formik.touched.email&&<div className="px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <span className="font-medium">{formik.errors.email}</span>
          </div>
          }

          <div className="relative z-0 w-full mb-5 group">
            
              <input type="password" name="password" id="password"
              value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="inputName peer" placeholder=" " />
              <label htmlFor="password" className="labelName">enter your password</label>
          
          </div>
          {formik.errors.password&&formik.touched.password&&<div className="px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <span className="font-medium">{formik.errors.password}</span>
          </div>
          }
          <div className="relative z-0 w-full mb-5 group">
            
              <input type="Password" name="rePassword" id="rePassword" 
              value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur}className=" inputName peer" placeholder=" " />
              <label htmlFor="rePassword" className="labelName">enter your rePassword</label>
          
          </div>
          {formik.errors.rePassword&&formik.touched.rePassword&&<div className="px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <span className="font-medium">{formik.errors.rePassword}</span>
          </div>
          }
          <div className="relative z-0 w-full mb-5 group">
            
              <input type="tel" name="phone" id="phone"
              value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} className="inputName peer" placeholder=" " />
              <label htmlFor="phone" className="labelName">enter your phone</label>
          
          </div>
          {formik.errors.phone&&formik.touched.phone&&
          <div className="px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <span className="font-medium">{formik.errors.phone}</span>
          </div>
          }

        {loading?<button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            <i className='fas fa-spinner fa-spin-pulse'></i> 
            </button>:
            <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
          }

    </form>

    </div>

  </>
}
