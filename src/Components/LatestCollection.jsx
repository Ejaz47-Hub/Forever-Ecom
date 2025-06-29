import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';

const LatestCollection = () => {
    // eslint-disable-next-line no-unused-vars
    const{ products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts]=useState([]);

useEffect(()=>{
    setLatestProducts(products.slice9(0,10));
},[])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Forever is a timeless lifestyle brand celebrating enduring style, quality, and conscious living.</p>
        </div>
    

    </div>
  )
}

export default LatestCollection