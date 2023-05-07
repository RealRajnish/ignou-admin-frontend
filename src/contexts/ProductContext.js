import axios from "axios";
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import reducer from "../reducers/ProductReducer";
const ProductContext = createContext();

const initialState = {
  products: [],
  singleProduct: {},
  strayProducts: [],
  singleStray: {},
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
