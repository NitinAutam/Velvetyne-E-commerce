import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

//props is an object that contains { children: <App /> }.
const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setshowSearch] = useState(false);
  
  // value makes this object accessible via context
  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setshowSearch,
  };
  
  return (
    // props.children ensures that all components wrapped inside ShopContextProvider
    // (e.g., <App />) can access the ShopContext values
    <ShopContext.Provider value={value}>
        {props.children}
        </ShopContext.Provider>
  );
};

export default ShopContextProvider;
