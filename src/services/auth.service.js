import axiosInstance from "../api/axiosInstance";

export const fetchLogin = async (data, callback) => {
  try {
    const res = await axiosInstance.post("https://fakestoreapi.com/auth/login", data);
    callback(true, res.data.token);
  } catch (err) {
    callback(false, err);
  }
};
