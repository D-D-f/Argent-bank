const INITIAL_STATE = {
  token: null,
};

const TokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_TOKEN": {
      return {
        ...state,
        token: action.payload,
      };
    }
    case "CLEAR_TOKEN":
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default TokenReducer;
