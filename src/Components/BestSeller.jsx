import React, { useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext';

const BestSeller = () => {
    const{ products } = useContext(ShopContext);
    const[BestSeller,setBestSeller] = useState([]);
     
    useEffect(()=>{
        const bestProduct = products.filter((item) => (item.BestSeller))
    },[])

  return (
    <div>BestSeller</div>
  )
}

export default BestSeller