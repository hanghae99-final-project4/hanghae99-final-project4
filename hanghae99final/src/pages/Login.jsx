import React from "react";
// import Router from "./shared/Router";
// import Naver from "../components/naver";
import Kakao from "../components/kakao";

const Login = () => {
  const onSuccessHandler = (res) => {
    console.log(res);
  };
  return (
    <div className="MainPage">
      {/* <Naver success={onSuccessHandler} fail={(res) => console.log(res)} /> */}
      <Kakao success={onSuccessHandler} fail={(res) => console.log(res)} />
    </div>
  );
};

export default Login;
