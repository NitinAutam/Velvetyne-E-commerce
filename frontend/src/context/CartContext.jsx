import React, { createContext, useState } from "react";
import { useContext } from "react";

export const CartContext=createContext();

export const CartContextProvider=(props)=>{
    //Item1 is current product; 
    //Item2 is currentSize
    const addItem=(item1,item2)=>{
      
    }
    
    const deleteItem=()=>{
       
    }

    const cartDetails={addItem,deleteItem}
    return (
        <CartContext.Provider value={cartDetails}>
          {props.children}
        </CartContext.Provider>
    )
}