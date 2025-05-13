import React, { useContext, useMemo, useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Product = () => {
  const { productId } = useParams();
  const { products, count, setCount } = useContext(ShopContext);
  const [activeTab, setActiveTab] = useState("description");
  const [selected, setSelected] = useState(null);
  const cardRef = useRef();
  const addToCartRef=useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      console.log("Selected state: ", selected); 
      if (cardRef.current && !cardRef.current.contains(e.target) && addToCartRef.current && !addToCartRef.current.contains(e.target)) {
        setSelected(false);
      }
    };
    if (selected) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selected]);

  // Finding the current product
  const dispatch = useDispatch();

  const currentProduct = products.find((item) => item._id === productId);

  // Handle case when product is not found
  if (!currentProduct) {
    return <div className="text-center py-10 text-xl">Product not found</div>;
  }

  const relatedProducts = useMemo(() => {
    return products
      .filter(
        (item) =>
          item._id !== currentProduct._id &&
          item.category === currentProduct.category &&
          item.subCategory === currentProduct.subCategory
      )
      .slice(0, 5);
  }, [products, currentProduct]);

  const checkingSize = (index) => {
    const selectedSize = currentProduct.sizes[index];
    console.log("Selected size: ", selectedSize);
    setSelected(selectedSize); // Save the actual size
  };

  

  return (
    <div className="container mx-auto px-12 md:px-24 py-8 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Product Images */}
        <div className="flex flex-row gap-3 pl-28">
          <div className="flex flex-col justify-between">
            {currentProduct.image.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i + 1}`}
                className="w-auto h-24 cursor-pointer border-transparent border-gray-300 hover:border-black transition hover:border"
              />
            ))}
          </div>
          <div className="">
            <img
              src={currentProduct.image[0] || "/fallback.jpg"}
              alt="Product"
              className="w-full  shadow-md"
            />
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            {currentProduct.name}
          </h1>
          {/*  Creating an array of length 4 using Array(4), then spreading it into a new array [...Array(4)].*/}
          <div className="flex items-center mt-5 ">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                src={assets.star_icon}
                alt="Star"
                className="h-3 w-auto"
              />
            ))}
            <img
              src={assets.star_dull_icon}
              alt="Dull Star"
              className="h-3 w-auto"
            />
            <p className="ml-1 text-gray-700">(122)</p>
          </div>

          <p className="text-xl mt-4">${currentProduct.price}</p>
          <p className="text-gray-600 mt-2">{currentProduct.description}</p>

          {/* Select Size */}
          <div className="mt-6">
            <h2 className="text-lg font-medium">Select Size</h2>
            <div ref={cardRef} className="flex space-x-3 mt-3">
              {currentProduct.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => checkingSize(index)}
                  className={`border px-6 py-2 font-medium transition hover:bg-gray-900 hover:text-white focus:ring-2 focus:ring-black ${
                    selected === size ? "bg-black text-white" : ""
                  }`} // Highlight selected size
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          {/* ADD TO CART*/}
          <button
            ref={addToCartRef}
            onClick={() => {
              console.log("Selected size in Add to Cart: ", selected);
              if (selected) {
                dispatch(
                  addToCart({
                    _id: currentProduct._id,
                    name: currentProduct.name,
                    price: currentProduct.price,
                    selectedSize: selected, // Passing the size
                    image: currentProduct.image[0],
                  })
                );
              } else {
                alert("Please select a size before adding to cart");
              }
            }}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 bg-black text-white py-3 px-10 mt-6 text-base font-medium border-2 border-transparent hover:border-black hover:bg-white hover:text-black transition"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      {/* Description*/}
      <div className="border p-2 mt-24">
        {/* Tabs */}
        <div className="flex border-b">
          <button
            className={`px-4 py-2 ${
              activeTab === "description"
                ? "font-semibold border-b-2 border-black"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "reviews"
                ? "font-semibold border-b-2 border-black"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (122)
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {activeTab === "description" && (
            <p className="text-gray-700">
              An e-commerce website is an online platform that facilitates the
              buying and selling of products or services over the internet. It
              serves as a virtual marketplace where businesses and individuals
              can showcase their products, interact with customers, and conduct
              transactions without the need for a physical presence. E-commerce
              websites have gained immense popularity due to their convenience,
              accessibility, and the global reach they offer.
              <br />
              <br />
              E-commerce websites typically display products or services along
              with detailed descriptions, images, prices, and any available
              variations (e.g., sizes, colors). Each product usually has its own
              dedicated page with relevant information.
            </p>
          )}
          {activeTab === "reviews" && (
            <p className="text-gray-700">
              User reviews will be displayed here.
            </p>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <div className="flex text-3xl justify-center">
          <Title text1={"Related"} text2={"Products"} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-6">
          {relatedProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
