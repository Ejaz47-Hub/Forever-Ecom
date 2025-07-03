import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { ShopContext } from '../Context/ShopContext';
import ProductItem from './ProductItem'; 

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products && Array.isArray(products)) {
      const bestProduct = products.filter((item) => item.bestseller === true);
      setBestSeller(bestProduct.slice(0, 5));
      console.log('Best sellers found:', bestProduct);
    }
  }, [products]);

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Discover our Bestsellers — the most-loved, top-rated products trusted by our customers every day.
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {bestSeller.length > 0 ? (
          bestSeller.map((item, index) => (
            <ProductItem
              key={item._id || index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400 text-sm">
            No best sellers available.
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
