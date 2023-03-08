const INITIAL_STATE = {
  auth: false,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_AUTH": {
      return {
        ...state,
        auth: action.payload,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
