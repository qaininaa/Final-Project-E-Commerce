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
              console.log(product);
              const newArr = product.map((e) => ({
                ...e,
                stock: (product.stock -= item.quantity),
                isValid: true,
              }));
              dispatch({
                type: "STOCK_UPDATE",
                value: newArr,
              });
            } else {
              console.log(`Stok tidak cukup untuk ${product.name}`);
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
          value: newArr,
        });
      }
    } catch (error) {
      dispatch({
        type: "FETCH_PRODUCTS_FAIL",
        value: [],
      });
    }
  };
};

export const filterProduct = (cat) => {
  return (dispatch, getState) => {
    dispatch({ type: "SEARCH_PRODUCTS", value: [] });
    const products = getState().products;
    if (products.data) {
      if (cat) {
        const filteredProduct = products.data.filter((e) => e.category == cat);
          dispatch({
            type: "FILTER_PRODUCTS",
            value: filteredProduct,
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
      if (keywords) {
        const searchValue = products.data.filter((e) => keywords.every((keyword) =>
          e.title.toLowerCase().includes(keyword.toLowerCase())
        )
      );
        dispatch({
          type: "SEARCH_PRODUCTS",
          value: searchValue,
        });
      }
      return products.data;
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
        value: detail 
      });
    } else {
      dispatch({
        type: "DETAIL_PRODUCT",
        value: null,
      });
    }
  };
};
