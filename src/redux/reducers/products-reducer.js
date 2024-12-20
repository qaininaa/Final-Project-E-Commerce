const initialState = {
  data: [],
  detail: null,
  filtered: [],
  searched: [],
  loading: false,
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_PRODUCTS_SUCCESS":
    case "STOCK_UPDATE":
      return { ...state, data: action.payload, loading: false };
    case "DETAIL_PRODUCT":
      return { ...state, detail: action.payload };
    case "FILTER_PRODUCTS":
      return { ...state, filtered: action.payload };
    case "SEARCH_PRODUCTS":
      return { ...state, searched: action.payload };
    case "FETCH_PRODUCTS_FAIL":
      return { ...state, loading: false, error: "Failed to fetch products" };
    default:
      return state;
  }
};

export default productsReducer;
