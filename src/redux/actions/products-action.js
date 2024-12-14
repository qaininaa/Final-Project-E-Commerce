import axiosInstance from "../../api/axiosInstance";

export const fetchProductsAction = () => {
  return async (dispatch, getState) => {
    const cart = getState().carts.cart;
    const products = getState().products.data;
    try {
      if (products.length > 0) {
        cart.forEach((item) => {
          const product = products.find((p) => p.id === item.id);
          if (product) {
            if (product.stock >= item.quantity) {
              const newArr = product.map((e) => ({
                ...e,
                stock: (product.stock -= item.quantity),
                isValid: true,
              }));
              dispatch({
                type: "STOCK_UPDATE",
                payload: newArr,
              });
            } else {
              console.log(`Insufficient stock for ${product.name}`);
            }
          }
        });
      } else {
        dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
        const res = await axiosInstance.get("/products");
        const newArr = res.data.map((e) => ({
          ...e,
          stock: 20,
          isValid: true,
        }));
        dispatch({
          type: "FETCH_PRODUCTS_SUCCESS",
          payload: newArr,
        });
      }
    } catch (error) {
      dispatch({
        type: "FETCH_PRODUCTS_FAIL",
        payload: [],
      });
    }
  };
};

export const filterProduct = (cat) => {
  return (dispatch, getState) => {
    dispatch({ type: "SEARCH_PRODUCTS", payload: [] });
    const products = getState().products;
    if (products.data) {
      if (cat) {
        const filteredProduct = products.data.filter((e) => e.category == cat);
          dispatch({
            type: "FILTER_PRODUCTS",
            payload: filteredProduct,
          });
        } else {
        return products.data;
      }
    }
  };
};

export const searchProduct = (keywords) => {
  return (dispatch, getState) => {
    const products = getState().products;
    if (products.data) {
      if (keywords.length === 1 && keywords[0] === 'All') {
        return products.data;
      }
      const searchValue = products.data.filter((e) => keywords.every((keyword) =>
        e.title.toLowerCase().includes(keyword.toLowerCase())
      )
    );
      dispatch({
        type: "SEARCH_PRODUCTS",
        payload: searchValue,
      });
    }
    return;
  };
};

export const detailProduct = (id) => {
  return (dispatch, getState) => {
    const product = getState().products.data;
    if (id && product.length > 0) {
      const detail = product.find((e) => e.id == id);
      dispatch({
        type: "DETAIL_PRODUCT",
        payload: detail 
      });
    } else {
      dispatch({
        type: "DETAIL_PRODUCT",
        payload: null,
      });
    }
  };
};
