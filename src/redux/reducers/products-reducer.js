const initialState = {
  data: [],
  loading: false,
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_PRODUCTS_SUCCESS":
      return { ...state, data: action.value, loading: false };
    case "FETCH_PRODUCTS_FAIL":
      return { ...state, loading: false, error: "Failed to fetch products" };
    default:
      return state;
  }
};

export default productsReducer;
