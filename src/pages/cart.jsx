import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCart,
  setCart,
  checkoutCart,
} from "../redux/actions/carts-action";
import { useNavigate } from "react-router";
import { MdOutlineCancel } from "react-icons/md";
import Swal from "sweetalert2";
import { CategoryCon } from "../components/context/CategoryContext";
import { filterProduct, searchProduct } from "../redux/actions/products-action";

const CartPage = () => {
  const carts = useSelector((state) => state.carts.cart);
  const products = useSelector((state) => state.products);
  const [totalPrice, setTotalPrice] = useState(0);
  const [valid, setValid] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category, setCategory } = useContext(CategoryCon);

  const swal = Swal.mixin({
    customClass: {
      confirmButton:
        "border-2 p-2 bg-red-500 border-red-500 text-white rounded mx-3",
      cancelButton:
        "border-2 p-2 bg-gray-400 border-gray-400 text-white rounded mx-3",
    },
    buttonsStyling: false,
  });

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < carts.length; i++) {
      sum += carts[i].qty * carts[i].price;
    }
    setTotalPrice(sum);
  }, [carts]);

  useEffect(() => {
    const hasInvalidItems = carts.find((item) => item.isValid == false);
    if (hasInvalidItems) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [carts, valid]);

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity >= 1) {
      const quantityDifference = newQuantity - item.qty;
      dispatch(setCart(item, quantityDifference));
    }
  };

  const handleCheckout = () => {
    if (carts.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your cart is empty!",
      });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to checkout all items?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, checkout!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      const newval = category.split(" ");
      if (result.isConfirmed) {
        console.log("cat dari cart", category);
        dispatch(checkoutCart());
        dispatch(filterProduct(category.toLowerCase())) ||
          dispatch(searchProduct(newval));
        navigate("/");
        Swal.fire("Success!", "Your order has been processed.", "success");
      }
    });
  };

  return (
    <div className="p-2">
      <table className="w-full">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {carts.length > 0 &&
            carts.map((item) => (
              <tr key={item.id} className="text-xs text-center">
                <td>
                  <img src={item.image} alt="" className="w-10 h-14" />
                </td>
                <td>
                  {item.title.substring(0, 20)}... <br />
                  {!item.isValid && (
                    <span className="text-red-500">no valid</span>
                  )}
                </td>
                <td>
                  {item.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td>
                  <input
                    type="number"
                    name=""
                    id=""
                    value={item.qty}
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value);
                      handleQuantityChange(item, newQuantity);
                    }}
                    min="1"
                    className="border-2 border-slate-300 w-1/3 text-center"
                  />
                </td>
                <td>
                  {(item.price * item.qty).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      swal
                        .fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonText: "Yes, delete it!",
                          cancelButtonText: "No, cancel!",
                          reverseButtons: true,
                        })
                        .then((result) => {
                          if (result.isConfirmed) {
                            swal.fire({
                              title: "Deleted!",
                              text: "Your file has been deleted.",
                              icon: "success",
                            });
                            dispatch(removeCart(carts, item));
                          }
                        });
                    }}
                  >
                    <MdOutlineCancel size={25} color="red" />
                  </button>
                </td>
              </tr>
            ))}
          <tr className="text-xs text-center">
            <td colSpan={4}>Total</td>
            <td>
              {totalPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="w-full flex justify-end px-3 mt-5">
        <button
          type="button"
          className={`p-2 ${
            !valid ? "bg-slate-400 text-white" : "bg-blue-400"
          } `}
          disabled={!valid}
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
