import { useState } from "react";
import ListNav from "./ListNav";
import LogoHeader from "./LogoHeader";

const Navbar = (props) => {
  const [slideNav, setSlideNav] = useState(false);
  const { nameLogo } = props;
  return (
    <>
      <LogoHeader nameLogo={nameLogo} onClick={() => setSlideNav(true)}>
        <SlideNav slideNav={slideNav} onClick={() => setSlideNav(false)} />
      </LogoHeader>
      <ListNav className="hidden lg:flex justify-center gap-16 w-3/6" />
    </>
  );
};

const SlideNav = ({ slideNav, onClick = () => {} }) => {
  return (
    <div
      className={`${
        slideNav ? "absolute" : "hidden"
      } bg-red-400 left-0 top-0 w-screen z-10 h-screen p-3 sm:w-72`}
    >
      <div className="flex justify-between">
        <h1>BukaToko</h1>
        <button type="button" onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
      </div>
      <ListNav className="text-center flex flex-col gap-y-3 mt-5" />
    </div>
  );
};

export default Navbar;
