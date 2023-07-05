import { createContext, useContext, useState } from "react";
import React from "react";

const myContext = createContext();

export const useProduct = () => useContext(myContext);

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  return (
    <myContext.Provider
      value={{ products, setCartProducts, setProducts, cartProducts }}
    >
      {children}
    </myContext.Provider>
  );
}

export default ProductProvider;
