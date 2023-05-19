const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_APPOINTMENTS_DATA":
      return {
        ...state,
        appointments: action.payload,
      };
    case "SET_REQ_REGISTER_STRAY_DATA":
      return {
        ...state,
        reqRegisterStray: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default ProductReducer;
