const userList = {
  statusLogin: false,
  listUser: [],
  dataLogin: [],
};

const userReducer = (state = userList, action) => {
  const { type, payload } = action;
  console.log(`payload`, payload);
  switch (type) {
    case "user":
      return {
        ...state,
        listUser: [...state.listUser, payload.userList],
      };
    case "LOGIN_OK":
      return {
        ...state,
        statusLogin: true,
        dataLogin: payload.isLogin,
      };
    case "LOGOUT":
      return userList;
    default:
      return state;
  }
};

export default userReducer;
