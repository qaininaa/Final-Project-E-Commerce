import axiosInstance from "../api/axiosInstance";

export const fetchLogin = async (data, callback) => {
  try {
    const res = await axiosInstance.post("/auth/login", data);
    callback(true, res.data.token);
  } catch (err) {
    callback(false, err);
  }
};
