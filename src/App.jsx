
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Products from './Components/Products/Products.jsx'
import Categories from './Components/Categories/Categories.jsx'
import Brands from './Components/Brands/Brands.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'
import UserContextProvider from './Context/UserContext.jsx'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'
import CartContextProvider from './Context/CartContext.jsx'
import { Toaster } from 'react-hot-toast'
import Allorders from './Components/Allorders/Allorders.jsx'
import Checkout from './Components/checkout/checkout.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ProtectedPuplick from './Components/ProtectedPuplick/ProtectedPuplick.jsx'

let routers = createBrowserRouter([
  {path: '' , element: <Layout/>, children :[
    {path:'home' , element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:'cart' , element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:'products' , element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:'categories' , element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:'allorders' , element:<ProtectedRoute><Allorders/></ProtectedRoute>},
    {path:'checkout' , element:<ProtectedRoute><Checkout/></ProtectedRoute>},
    {path:'productdetails/:id' , element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:'brands' , element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:'login' , element: <ProtectedPuplick><Login/></ProtectedPuplick> },
    {index:'true' , element: <ProtectedPuplick><Register/></ProtectedPuplick> },
    {path:'*' , element: <Notfound/> },
  ]}
])

let query=new QueryClient()

function App() {

  return <>
  <QueryClientProvider client={query} >

        <CartContextProvider>

          <UserContextProvider>
            <RouterProvider router={routers}></RouterProvider>
            <ReactQueryDevtools/>
            <Toaster />
          </UserContextProvider>

      </CartContextProvider>

  </QueryClientProvider>

 
  
  </>

}

export default App
