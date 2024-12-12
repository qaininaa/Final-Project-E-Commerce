import axiosInstance from "../api/axiosInstance";

export const getDetailProducts = async (id, callback) => {
  try {
    const res = await axiosInstance.get(`/products/${id}`);
    res.data = {...res.data, stock: 20, isValid: true}
    callback(res.data)
  } catch (error) {
    console.error(error);
    throw error; 
  }
};
