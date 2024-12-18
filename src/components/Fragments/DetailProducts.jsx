import { GoPlus } from "react-icons/go";
import { PiMinusLight } from "react-icons/pi";
import "react-toastify/dist/ReactToastify.css";

const DetailProduct = ({ children }) => {
  return <div className="mt-10">{children}</div>;
};

const Header = ({ img }) => {
  return (
    <div className="w-full h-64 flex justify-center">
      <img src={img} alt="Product Image" className="h-full" />
    </div>
  );
};

const Body = (props) => {
  const { rate, count, desc, price, title } = props;
  return (
    <div className="mt-5">
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="my-1">
        {rate}/5 ({count} Reviews)
      </p>
      <p className="text-xl my-1">
        {price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <p className="text-justify">{desc}</p>
    </div>
  );
};

const Footer = (props) => {
  const {
    handleMinus = () => {},
    handlePlus = () => {},
    quantity,
    handleAddToCart = () => {},
  } = props;

  return (
    <div className="flex justify-between mt-10 ">
      <div className=" flex items-center font-semibold h-12 w-36">
        <button
          type="button"
          className="border-2 border-slate-200 py-2 h-full w-1/4 flex justify-center items-center"
          onClick={handleMinus}
        >
          <PiMinusLight size={20} />
        </button>
        <h1 className="flex justify-center w-1/2 items-center text-2xl border-y-2 border-slate-200 h-full">
          {quantity}
        </h1>
        <button
          type="button"
          className="border-2 border-red-500 w-1/4 bg-red-500 text-white h-full flex justify-center items-center"
          onClick={handlePlus}
        >
          <GoPlus size={25} />
        </button>
      </div>
      <button
        type="button"
        className="border-2 border-red-500 p-2 bg-red-500 text-white"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>
    </div>
  );
};

DetailProduct.Header = Header;
DetailProduct.Body = Body;
DetailProduct.Footer = Footer;

export default DetailProduct;
