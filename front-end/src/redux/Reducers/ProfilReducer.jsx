const INITIAL_STATE = {
  user: null,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_PROFILE": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "OUT_PROFILE":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default UserReducer;
