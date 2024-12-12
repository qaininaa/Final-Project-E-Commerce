import { useEffect, useState } from "react";
import { getDetailProducts } from "../services/productsDetail.service";
import { useNavigate, useParams } from "react-router";
import { GoPlus } from "react-icons/go";
import { PiMinusLight } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setCart } from "../redux/actions/carts-action";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

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
    getDetailProducts(id, (data) => {
      setProduct(data);
      setLoading(false);
    });
  }, []);

  const handlePlus = () => {
    setQuantity((prev) => {
      return prev + 1;
    });
  };
  const handleMinus = () => {
    setQuantity((prev) => {
      if (prev == 0) {
        return 0;
      }
      return prev - 1;
    });
  };

  useEffect(() => {
    if (product && loading) {
      if (id != product.id) {
        throw new Error("eror");
      }
    }
  }, [loading, id, product]);

  if (loading)
    return (
      <div className="flex justify-center h-screen items-center">
        <div>Loading...</div>
      </div>
    );

  return (
    <div className="p-2">
      <p className="text-slate-400">
        Home / {product.category} /{" "}
        <span className="font-medium">{product.title}</span>{" "}
      </p>
      <div className="mt-16">
        <div className="w-full h-64 flex justify-center">
          <img src={product.image} alt="" className="h-full" />
        </div>
        <div>
          <h1 className="text-xl">{product.title}</h1>
          <p>
            {product.rating.rate}/5 ({product.rating.count} Reviews)
          </p>
          <p className="text-xl">
            {product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <p className="text-justify">{product.description}</p>
          <hr className="font-bold mb-4" />
          <div className="flex justify-between">
            <div className=" flex items-center font-semibold h-12 w-36">
              <button
                type="button"
                className="border-2 border-slate-200 py-2 h-full w-1/4 flex justify-center items-center"
                onClick={() => handleMinus()}
              >
                <PiMinusLight size={20} />
              </button>
              <h1 className="flex justify-center w-1/2 items-center text-2xl border-y-2 border-slate-200 h-full">
                {quantity}
              </h1>
              <button
                type="button"
                className="border-2 border-red-500 w-1/4 bg-red-500 text-white h-full flex justify-center items-center"
                onClick={() => handlePlus()}
              >
                <GoPlus size={25} />
              </button>
            </div>
            <button
              type="button"
              className="border-2 border-red-500 p-2 bg-red-500 text-white"
              onClick={() => {
                if (localStorage.getItem("token")) {
                  dispatch(setCart(product, quantity));
                  notify();
                } else {
                  navigate("/login");
                }
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
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

export default DetailProductPage;
