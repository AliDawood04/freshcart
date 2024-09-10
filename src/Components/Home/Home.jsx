import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import axios from 'axios'
import RecentProducts from '../RecentProducts/RecentProducts'
import Loding from '../Loding/Loding'
import CategorySlider from '../CategorySlider/CategorySlider'
import MainSlider from '../MainSlider/MainSlider'

export default function Home() {

  return <>
      <MainSlider/>
      <CategorySlider/>
      <RecentProducts />
    
  </>
}
