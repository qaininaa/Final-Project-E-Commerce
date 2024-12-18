import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { detailProduct } from "../redux/actions/products-action";
import DetailProduct from "../components/Fragments/DetailProducts";
import { setCart } from "../redux/actions/carts-action";
import FooterPage from "../components/Fragments/FooterPage";

const DetailProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const product = useSelector((state) => state.products.detail);

  useEffect(() => {
    dispatch(detailProduct(id));
    window.scrollTo(0, 0);
  }, [id]);

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

  if (!product || Object.keys(product).length === 0)
    return (
      <div className="flex justify-center h-screen items-center">
        <div>Loading...</div>
      </div>
    );

  return (
    <>
      <div className="p-6 font-poppins">
        {/* path */}
        <p className="text-slate-400">
          Home / {product.category} /{" "}
          <span className="font-medium">{product.title}</span>{" "}
        </p>
        <DetailProduct>
          <DetailProduct.Header img={product.image} />
          <DetailProduct.Body
            title={product.title}
            rate={product.rating.rate}
            count={product.rating.count}
            price={product.price}
            quantity={quantity}
            desc={product.description}
          />
          <DetailProduct.Footer
            handleMinus={() => handleMinus()}
            handlePlus={() => handlePlus()}
            quantity={quantity}
            product={product}
            handleAddToCart={() => {
              if (localStorage.getItem("token")) {
                dispatch(setCart(product, quantity));
                notify();
              } else {
                navigate("/login");
              }
            }}
          />
        </DetailProduct>
      </div>
      <FooterPage />
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
    </>
  );
};

export default DetailProductPage;
