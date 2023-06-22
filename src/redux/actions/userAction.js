import * as api from "../../services/api";

/** 로그인 */
export const userLogin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signin(formData);

    if (data.success) {
      dispatch({
        type: "USER_LOGIN",
        payload: data,
      });
    }
  } catch (e) {
    console.log(e);
    if (e.response?.status === 401) {
      alert("아이디 또는 비밀번호가 다릅니다.");
    }
    dispatch({
      type: "USER_LOGIN_ERROR",
      payload: e.response?.data?.message ?? "",
    });
  }
};
/** 매 페이지마다 회원임을 인증하는 함수 */
export const userAuthorization = (data) => {
  return {
    type: "USER_AUTHORIZATION",
    payload: data,
  };
};
/** 매 페이지 인증시 회원이 아닐 때 실행하는 함수 */
export const userAuthorizationError = (data) => {
  return {
    type: "USER_AUTHORIZATION_ERROR",
    payload: data?.message ?? "",
  };
};
