const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CART_SAME_PRODUCT":
    case "CART_NEW_PRODUCT":
    case "REMOVE_CART_PRODUCT":
    case "UPDATE_PRODUCTS_STOCK":
        return {...state, cart:action.payload};
    case "CLEAR_CART":
      return {...state, cart:action.payload}
        
    default:
      return state;
  }
};

export default cartReducer;
