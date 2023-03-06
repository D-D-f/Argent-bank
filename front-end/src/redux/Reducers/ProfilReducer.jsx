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

export const getUser = (token) => (dispatch) => {
  fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch({
        type: "SET_PROFILE",
        payload: data,
      });
    });
};
