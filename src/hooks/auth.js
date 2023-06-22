import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuthToken } from "../services/api";
import {
  userAuthorization,
  userAuthorizationError,
} from "../redux/actions/userAction";

/** 사용자의 권한을 파악해주는 인증 관련 Higher Order Component */
export default function auth(
  SpecificComponent,
  user //유저가 접근할 수 있는가?
) {
  function AuthenticationCheck() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ready, setReady] = useState(false);
    const { isAuth } = useSelector((state) => state.userReducer);

    useEffect(() => {
      getToken();
    }, []);

    const getToken = async () => {
      try {
        const { data } = await getAuthToken();
        dispatch(userAuthorization(data?.userData));
        setReady(true);
      } catch (e) {
        const { success } = e?.response?.data;
        // 인증이 되지 않은 사람들
        if (success) {
          dispatch(userAuthorizationError(e?.response?.data));
          setReady(true);
        }
      }
    };

    useEffect(() => {
      if (ready) {
        if (isAuth) {
          //로그인 상태
          if (!user) {
            //로그인 한 사람 모두 못들어가는 페이지이면
            return navigate("/main");
          } else {
            return navigate("/main");
          }
        } else {
          //로그아웃 상태
          //로그인 안 한 사람은 못들어가는 페이지이면
          if (user) {
            return navigate("/login");
          }
        }
      }
    }, [ready, isAuth, navigate]);

    return <>{ready && <SpecificComponent />}</>;
  }

  return (
    <>
      <AuthenticationCheck />
    </>
  );
}
