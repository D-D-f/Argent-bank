const INITIAL_STATE = {
  userName: null,
};

const UserNameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USERNAME": {
      return {
        ...state,
        userName: action.payload,
      };
    }
    default:
      return state;
  }
};

export default UserNameReducer;

export const getUserName = (token) => (dispatch) => {
  fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: "SET_USERNAME",
        payload: data,
      });
    });
};
