import { jwtDecode } from "jwt-decode";
import axiosInstance from "../api/axiosInstance";

export const fetchLogin = async (data, callback) => {
  try {
    const res = await axiosInstance.post("/auth/login", data);
    callback(true, res.data.token);
  } catch (err) {
    callback(false, err);
  }
};

export const usernameProfile = (token,callback) => {
  const decoded = jwtDecode(token)
  callback(decoded.user) 
}
