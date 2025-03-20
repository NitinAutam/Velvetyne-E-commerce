import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { use } from "react";

// Creating the context in the form of ShopContext, which can be used later  
export const ShopContext = createContext();

// ShopContextProvider wraps the main app and provides the ShopContext values 
const ShopContextProvider = (props) => {
    
    const currency = '$';
    const deliveryFee = 10;
    const [search,setSearch]=useState('');
    const [showSearch,setshowSearch]=useState(false);
    const [count,setCount]=useState(0);

    // value makes this object accessible via context
    const value = { products, currency, deliveryFee,search,setSearch,showSearch,setshowSearch,count,setCount};

    return (
        // props.children ensures that all components wrapped inside ShopContextProvider 
        // (e.g., <App />) can access the ShopContext values
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
