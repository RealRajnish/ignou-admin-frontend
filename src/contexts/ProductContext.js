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

// for getting all the appointments
const API_1 = "/viewAppointments";

const initialState = {
  products: [],
  singleProduct: {},
  strayProducts: [],
  singleStray: {},
  appointments: [],
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // API_1 call for getting all appointments
  const getAppointments = async (url) => {
    // dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const appointments = await res.data;
      // console.log(prodocts);
      dispatch({
        type: "SET_APPOINTMENTS_DATA",
        payload: appointments,
      });
    } catch (error) {
      // dispatch({ type: "API_ERROR" });
      console.log("Error occurred in api call");
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments(API_1);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};

// use custom hook for appointments
const useAppointmentContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider, ProductContext, useAppointmentContext };
