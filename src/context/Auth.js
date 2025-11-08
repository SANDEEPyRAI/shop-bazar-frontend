import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiConfig } from "src/apiconfig/ApiConfig";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

export const AuthContext = createContext();

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("creatturAccessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("creatturAccessToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

function checkLogin(token) {
  const accessToken = window.localStorage.getItem("token") ?? token;
  return accessToken ? true : false;
}

export default function AuthProvider(props) {
  const [isLogin, setIsLogin] = useState(checkLogin());
  const [userData] = useState({});
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const token = localStorage.getItem("token");

  const getProfileData = async () => {
    setLoading(true);
    try {
      const res = await axios({
        method: "GET",
        url: apiConfig.getUserProfile,
        headers: {
          token: token,
        },
      });
      if (res?.data?.responseCode === 200) {
        setProfileData(res?.data?.result);
        // setProfileData((prevData) => ({
        //   ...prevData,
        //   ...res?.data?.result,
        // }));
        setLoading(false);
      } else if (res?.data?.responseCode === 401) {
        console.log("fdshfsfdjhfdjhfjdshfjsdhf");
      }
    } catch (error) {
      if (
        error?.response?.data?.responseCode === 401 &&
        error?.response?.data?.responseMessage === "Unauthorized user."
      ) {
        history.push("/");
        toast.error(error?.response?.data?.responseMessage);
        localStorage.removeItem("token");
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getProfileData();
    }
  }, [localStorage.getItem("token"), isLogin]);

  console.log(loading, "atyerrferrwef");

  let data = {
    userLoggedIn: isLogin,
    userData,
    profileData,
    loading,
    setLoading,
    setIsLogin,
    setProfileData,
    getProfileData: getProfileData,
    userLogIn: (type, data) => {
      setSession(data);
      setIsLogin(type);
    },
    checkLogin: (token) => {
      checkLogin(token);
    },
  };

  console.log("isLogin", isLogin);

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
}
