export const setCart = (product, quantity) => {
  return (dispatch, getState) => {
    const cart = getState().carts.cart;

    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        const newQty = item.qty + quantity;
        if (newQty >= 1 && newQty <= item.stock) {
          return { ...item, qty: newQty, isValid: true };
        } else if (newQty >= 1 && newQty > item.stock) {
          return { ...item, qty: newQty, isValid: false };
        }
        return item;
      }
      return item;
    });

    const isAlreadyInCart = cart.find((item) => item.id === product.id);

    if (isAlreadyInCart) {
      dispatch({
        type: "CART_SAME_PRODUCT",
        payload: updatedCart,
      });
    } else {
      if (product.stock < quantity ) {
        dispatch({
          type: "CART_NEW_PRODUCT",
          payload: [...cart, { ...product, qty: quantity, isValid: false }],
        });
      } else {
        dispatch({
          type: "CART_NEW_PRODUCT",
          payload: [...cart, { ...product, qty: quantity }],
        });
      }
    }
  };
};

export const removeCart = (cart, item) => {
  return (dispatch) => {
    const index = cart.indexOf(item);
    const removeProduct = cart.splice(index, 1);
    dispatch({
      type: "REMOVE_CART_PRODUCT",
      payload: [...cart],
    });
  };
};

export const checkoutCart = () => {
  return (dispatch, getState) => {
    const cart = getState().carts.cart;
    const products = getState().products.data;
    if (cart.length === 0) {
      console.log("Cart is empty!");
      return;
    }
    const updatedProducts = products.map((product) => {
      const cartItem = cart.find((item) => item.id === product.id);
      if (cartItem) {
        if (product.stock >= cartItem.qty) {
          return { ...product, stock: product.stock - cartItem.qty };
        }
      }
      return product;
    });

    dispatch({
      type: "STOCK_UPDATE",
      payload: updatedProducts,
    });

    dispatch({
      type: "CLEAR_CART",
      payload: [],
    });
  };
};
