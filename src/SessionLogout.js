import React, { useContext, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useIdleTimer } from "react-idle-timer";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./context/Auth";

export default function SessionLogout({ children }) {
  const history = useHistory();
  const idleTimerRef = useRef();
  const auth = useContext(AuthContext);

  const handleOnIdle = (event) => {
    const remainingTime = idleTimerRef.current.getRemainingTime();
    const lastActiveTime = idleTimerRef.current.getLastActiveTime();
    console.log("Remaining time:", remainingTime);
    console.log("Last active time:", lastActiveTime);
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("creatturAccessToken");
    toast.error("Session has been Expired");
    auth?.setIsLogin(false);
    // Redirect("/");
    history.push("/");
  };

  const handleOnActive = (event) => {
  };

  const handleOnAction = (event) => {
  };

  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 30 * 60, // 30 minutes
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onAction: handleOnAction,
    debounce: 500,
  });

  useEffect(() => {
    // Save the reference to the idle timer hook
    idleTimerRef.current = {
      getRemainingTime,
      getLastActiveTime,
    };
  }, []);

  return <div>{children}</div>;
}
