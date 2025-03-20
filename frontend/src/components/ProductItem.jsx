import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link, useHref, useLocation } from 'react-router-dom';

const ProductItem = ({id,name,image,price}) => {
    const {currency} = useContext(ShopContext);
    
    const {pathname}=useLocation();
    // everytime pathname changes 
    useEffect(()=>{
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },[pathname]);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}` }>
        <div className='overflow-hidden'>
           <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem