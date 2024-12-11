import axiosInstance from "../../api/axiosInstance";

export const fetchProductsAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_PRODUCTS_REQUEST" });

      const res = await axiosInstance.get("/products");
      const newArr = res.data.map(e => ({...e, stock: 20, isValid: true}))
      dispatch({
        type: "FETCH_PRODUCTS_SUCCESS",
        value: newArr
      });
    } catch (error) {
      dispatch({
        type: "FETCH_PRODUCTS_FAIL",
        value: [],
      });
    }
  };
};
