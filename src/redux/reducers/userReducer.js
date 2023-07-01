const initialState = {
  authData: {
    email: "",
    name: "",
    user_id: "",
  },
  error: {
    message: "",
  },
  loginState: false,
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "USER_LOGIN": {
      const { email, name, user_id } = payload;
      return {
        ...state,
        authData: {
          email,
          name,
          user_id,
        },
        loginState: true,
      };
    }
    case "USER_LOGIN_ERROR":
      return {
        ...state,
        error: {
          message: payload,
        },
        loginState: false,
      };
    case "USER_AUTHORIZATION": {
      const {
        email,
        name,
        user_id,
        nickname,
        image,
        user_bookshelf,
        user_like_book,
        user_cart,
        user_interest,
        user_type,
      } = payload;
      return {
        ...state,
        authData: {
          ...state.authData,
          email,
          name,
          user_id,
          nickname,
          image,
          user_bookshelf,
          user_like_book,
          user_cart,
          user_interest,
          user_type,
        },
        isAuth: true,
      };
    }
    case "USER_AUTHORIZATION_ERROR":
      return {
        ...state,
        error: {
          message: payload,
        },
        loginState: false,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default userReducer;
