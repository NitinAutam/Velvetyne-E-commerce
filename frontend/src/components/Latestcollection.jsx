import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const Latestcollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts,setLatestProducts]=useState([]);

  useEffect(() => {
     setLatestProducts(products.slice(0,10));
  }, [])
  

  return (
    <div className="m-10 px-14">
      <div className="text-center py-8 text-3xl">
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className="w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-6">
        Find your perfect style with our one-of-a-kind designer clothes!</p>
      </div>
      {/*Rendering Products*/}
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
            latestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
      </div>
    </div>
  );
};

export default Latestcollection;
