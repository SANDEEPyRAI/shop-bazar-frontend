// utils/auth.js

export const getToken = () => {
  return localStorage.getItem("token"); // ya jo bhi storage tum use kar rahe ho
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const removeToken = () => {
  localStorage.removeItem("token");
};
