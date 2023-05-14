const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_APPOINTMENTS_DATA":
      return {
        ...state,
        appointments: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default ProductReducer;
