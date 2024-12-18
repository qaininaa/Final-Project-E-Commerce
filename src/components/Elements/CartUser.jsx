import { useNavigate } from "react-router";
import { PiUserCircleLight } from "react-icons/pi";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const CartUser = () => {
  const carts = useSelector((state) => state.carts.cart);
  const [cartLength, setCartLength] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setCartLength(carts.length);
  }, [carts]);
  return (
    <div className="flex w-1/4 h-full items-center justify-evenly font-poppins">
      <button
        type="button"
        className="relative w-fit h-4/5  flex justify-center items-center "
        onClick={() => navigate("/cart")}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.25 20.25C8.66421 20.25 9 19.9142 9 19.5C9 19.0858 8.66421 18.75 8.25 18.75C7.83579 18.75 7.5 19.0858 7.5 19.5C7.5 19.9142 7.83579 20.25 8.25 20.25Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.75 20.25C19.1642 20.25 19.5 19.9142 19.5 19.5C19.5 19.0858 19.1642 18.75 18.75 18.75C18.3358 18.75 18 19.0858 18 19.5C18 19.9142 18.3358 20.25 18.75 20.25Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.25 3.75H5.25L7.5 16.5H19.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 12.5H19.1925C19.2792 12.5001 19.3633 12.4701 19.4304 12.4151C19.4975 12.3601 19.5434 12.2836 19.5605 12.1986L20.9105 5.44859C20.9214 5.39417 20.92 5.338 20.9066 5.28414C20.8931 5.23029 20.8679 5.18009 20.8327 5.13717C20.7975 5.09426 20.7532 5.05969 20.703 5.03597C20.6528 5.01225 20.598 4.99996 20.5425 5H6"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {cartLength != 0 && (
          <div className="bg-red-400 absolute rounded-full w-4 h-4 flex items-center justify-center top-0 left-3">
            <p className="text-[8pt] text-white font-medium">{cartLength}</p>
          </div>
        )}
      </button>
      {localStorage.getItem("token") && (
        <button
          type="button"
          onClick={() => navigate("/profile")}
          className="flex justify-center items-center"
        >
          <PiUserCircleLight size={30} />
        </button>
      )}
    </div>
  );
};

export default CartUser;
