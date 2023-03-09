

import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../utils/cookies";

const LoginRoute = () => {
  return isLoggedIn() ? (
    <Outlet />
  ) : (
    <Navigate to="/login" {...alert("로그인이 필요합니다.")} />
  );
};

export default LoginRoute;