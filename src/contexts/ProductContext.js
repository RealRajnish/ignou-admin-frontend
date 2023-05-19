import axios from "axios";
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import reducer from "../reducers/ProductReducer";
import { useNavigate } from "react-router-dom";
const ProductContext = createContext();

// for getting all the appointments
const API_1 = "/viewAppointments";
const API_2 = "/getReqRegisterStray";

// for deleting stray Animal register Request
const API_3 = "/delReqRegisterStray";

// For adding stray animals
const API_4 = "/addStray";

const initialState = {
  products: [],
  singleProduct: {},
  strayProducts: [],
  singleStray: {},
  appointments: [],
  reqRegisterStray: [],
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const Navigate = useNavigate();

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

  // API_2 call for getting all appointments
  const getReqRegisterStray = async (url) => {
    // dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const stray = await res.data;
      // console.log(prodocts);
      dispatch({
        type: "SET_REQ_REGISTER_STRAY_DATA",
        payload: stray,
      });
    } catch (error) {
      // dispatch({ type: "API_ERROR" });
      console.log("Error occurred in api call");
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments(API_1);
    getReqRegisterStray(API_2);
  }, []);

  // const handleDelete = async (id) => {
  //   try {
  //     const data = await axios.delete(`${API_3}/${id}`);
  //     console.log(data);
  //     // Navigate("/manageproducts");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <ProductContext.Provider value={{ ...state, getReqRegisterStray }}>
      {children}
    </ProductContext.Provider>
  );
};

// use custom hook for appointments
const useProductContext = () => {
  return useContext(ProductContext);
};

export {
  ProductProvider,
  ProductContext,
  useProductContext,
  API_3,
  API_2,
  API_4,
};
