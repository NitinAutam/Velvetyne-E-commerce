import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { ShopContext } from "../context/ShopContext";

const Bestsellers = () => {
  const { products } = useContext(ShopContext);
  const [bestsellers, setbestsellers] = useState([]);

  useEffect(() => {
    if (products && Array.isArray(products)) {
      const filtered = products.filter(
        (product) => product.bestseller === true
      );
      setbestsellers(filtered.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="m-10 px-14">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-6">
          Find your perfect style with our one-of-a-kind designer clothes!
        </p>
      </div>
      {/*Rendering Products*/}
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6">
        {bestsellers.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;
