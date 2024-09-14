import React, { useContext } from 'react'
import logo from '../../assets/images/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'

export default function Navbar() {



  let navigate=useNavigate();
let {userData,setUserData}=useContext(UserContext)
let {cart}= useContext(CartContext);
  function logOut() {
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate("/login")
  }

    
  return <>
    <nav className='bg-gray-200  md:fixed top-0 inset-x-0 py-2 text-center capitalize z-50'>
      <div className="container flex flex-col md:flex-row justify-between items-center text-gray-500">
        <div className='flex flex-col md:flex-row space-x-3'>
          <img src={logo} width={120} alt="" />

          {userData&&<ul className='flex flex-col md:flex-row space-x-2'>
            <li><NavLink to="home"> Home</NavLink></li>       
            <li><NavLink to="products">products</NavLink></li>
            <li><NavLink to="categories">categories</NavLink></li>
            <li><NavLink to="brands">brands</NavLink></li>
          </ul>}

        </div>
        <div className=''>
          <ul className='flex flex-col md:flex-row space-x-2'>
           
          
            {userData?
            <>
            <li className='relative'><NavLink to="cart"><i className="fa-solid fa-xl text-mainColor  fa-cart-shopping"></i> </NavLink><span className='text-white absolute left-1/2 bottom-[5px] '> {cart?cart.numOfCartItems:0}</span></li>

            <NavLink><span onClick={()=>logOut()} className='mx-6 '>logout</span></NavLink>
            </>
            :
            <>                                                                          
            <li><NavLink to="login">Login</NavLink></li>
            <li><NavLink to="">Register</NavLink></li>
            </>
            }
            <li className='space-x-2 text-black'>
                  <i className='fab fa-facebook-f'></i>
                  <i className='fab fa-linkedin-in'></i>
                  <i className='fab fa-youtube'></i>
                  <i className='fab fa-twitter'></i>
                  <i className='fab fa-instagram'></i>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  
  </>
}
