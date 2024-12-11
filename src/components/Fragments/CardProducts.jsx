import { useEffect } from "react";
import HeadingChose from "../Elements/HeadingChose";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsAction } from "../../redux/actions/products-action";
import { setCart } from "../../redux/actions/carts-action";
import { Link, useNavigate } from "react-router";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardProducts = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notify = () =>
    toast.success("successfully added to cart", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, []);

  if (products.loading == true) {
    return (
      <div className="flex w-full justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <HeadingChose heading="Products" subHeading="Browse All Products" />
      <div className="flex flex-wrap justify-center gap-5 msm:justify-evenly">
        {products.data.length > 0 &&
          products.data.map((product) => (
            <div className="w-52" key={product.id}>
              <div className="relative w-full h-52 group overflow-hidden">
                <Link to={`/detail/${product.id}`}>
                  <img
                    src={product.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <p className="absolute font-medium top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 text-white flex items-center justify-center transition-opacity duration-200">
                    See Detail
                  </p>
                </Link>
              </div>
              <div className="flex flex-col justify-between text-sm gap-1">
                <h2 className="font-semibold h-10 overflow-hidden">
                  {product.title.substring(0, 50)}...
                </h2>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-red-500">
                      {product.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      })}
                    </p>
                    <p>{product.rating.rate}/5.0</p>
                  </div>
                  <button
                    type="button"
                    className="rounded border-2 border-blue-400 bg-blue-400 hover:opacity-70 p-1 text-xs text-white disabled:"
                    onClick={() => {
                      if (localStorage.getItem("token")) {
                        dispatch(setCart(product, 1));
                        notify();
                      } else {
                        navigate("/login");
                      }
                    }}
                  >
                    Add to Chart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default CardProducts;
