const UserReducer = (state, action) => {
  if (action.type === "USER") {
    return {
      ...state,
      userLoggedIn: true,
    };
  }
  return state;
};

export default UserReducer;
