import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";


export let CartContext= createContext()


export default function CartContextProvider({children}){

    let headers= {
        token: localStorage.getItem('userToken')
    }
    const [cart, setCart] = useState(null)
    const [loding, setLoding] = useState(false)

    async function updateProductCount(productId,count) {
        if (count>0) {
            try{
                setLoding(true)
                let {data}=await axios.put(` https://ecommerce.routemisr.com/api/v1/cart/${productId} `,{count},{headers});
                console.log(data);
                
                setCart(data)
                setLoding(false)
            }catch(err){
                console.log(err);
                setLoding(false)
            }  
        }else{
            deleteProduct(productId)
        }
      

    }

    async function deleteProduct(productId) {
        
        try{
            setLoding(true)
            let {data}=await axios.delete(` https://ecommerce.routemisr.com/api/v1/cart/${productId} `,{headers});
            console.log(data);
            setCart(data)
            setLoding(false)
        }catch(err){
            console.log(err);
            setLoding(false)
        }

    }

    async function addProductToCart(productId) {
        
        try{
            setLoding(true)
            let {data}=await axios.post(' https://ecommerce.routemisr.com/api/v1/cart',{productId},{headers});
            console.log(data);
            toast.success(data.message,{
                duration:2000,
            });
            setCart(data)
            setLoding(false)
        }catch(err){
            console.log(err);
            setLoding(false)
        }
    }

    async function checkOut(shippingAddress) {
        
        try{
            setLoding(true)
            let {data}=await axios.post(` https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=${window.location.origin}`,{shippingAddress},{headers});
            console.log(data);
            window.location.href=data.session.url
            setLoding(false)
        }catch(err){
            console.log(err);
            setLoding(false)
        }
    }


    async function getCart() {
        
        try{
            setLoding(true);
            let {data}=await axios.get(' https://ecommerce.routemisr.com/api/v1/cart',{
                    headers
                });
            console.log(data);
        
            setCart(data);
            setLoding(false)    
        }catch(err){
            console.log(err);
            setLoding(false)
        }
    }
    useEffect(() => {
    getCart()
    }, [])
    
    return<CartContext.Provider value={ {checkOut,deleteProduct,loding,updateProductCount,addProductToCart,getCart,cart,setCart} } >
        {children}
    </CartContext.Provider>
}