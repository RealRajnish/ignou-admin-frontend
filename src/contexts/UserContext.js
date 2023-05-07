import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/UserReducer";

const UserContext = createContext();

const initialState = {
  userLoggedIn: false,
  rootUser: { name: "ADMIN" },
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoggedIn = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ ...state, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
