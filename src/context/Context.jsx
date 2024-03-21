import React, { createContext, useContext, useReducer } from "react";
import FoodData from "../data/FoodData";
import { cartReducer } from "./Reducer";

const Cart = createContext();

const Context = ({ children }) => {
  const products = FoodData[0].map((item) => ({
    id: item.id,
    title: item.title,
    price: item.price,
    category: item.category,
    description: item.description,
    image: item.image,
    rating: item.rating,
    inStock: item.instock,
  }));
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  console.log(products, "llllllllllllllllllllllllll");

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;
export const CartState = () => {
  return useContext(Cart);
};
