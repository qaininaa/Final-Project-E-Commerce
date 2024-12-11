import CartFav from "../Elements/CartFav";
import Navbar from "../Elements/Navbar";
import Search from "../Elements/Search";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-2 px-3 w-full gap-2 sticky top-0 z-50 bg-white">
      <Navbar nameLogo="BukaToko" />
      <div className="flex items-center gap-1 w-5/6 sm:w-2/3 lg:w-2/6 justify-end h-10 ">
        <div className="w-3/4">
          <Search />
        </div>
        <div className="flex gap-1 w-1/4 h-full items-center justify-evenly">
          <CartFav />
        </div>
      </div>
    </div>
  );
};

export default Header;
