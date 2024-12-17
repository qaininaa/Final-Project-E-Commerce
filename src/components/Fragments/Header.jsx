import { useDispatch } from "react-redux";
import { searchProduct } from "../../redux/actions/products-action";
import Navbar from "../Elements/Navbar";
import Search from "../Elements/Search";
import { useContext } from "react";
import { CategoryCon } from "../context/CategoryContext";
import { useNavigate } from "react-router";
import CartUser from "../Elements/CartUser";

const Header = () => {
  const dispatch = useDispatch();
  const { category, setCategory } = useContext(CategoryCon);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    let searchBar = e.target.searchBar.value.split(" ");

    if (searchBar != "") {
      dispatch(searchProduct(searchBar));
      dispatch({ type: "FILTER_PRODUCTS", payload: [] });
      navigate("/");
      const newVal = searchBar.join(" ");
      setCategory(newVal);
    } else {
      let categorySplit = category.split(" ");
      dispatch(searchProduct(categorySplit));
      setCategory("All");
      dispatch({ type: "SEARCH_PRODUCTS", payload: [] });
      navigate("/");
    }
  };

  return (
    <div className="flex justify-between items-center py-2 px-3 w-full gap-2 sticky top-0 z-50 bg-white">
      <Navbar nameLogo="BukaToko" />
      <div className="flex items-center gap-1 w-5/6 sm:w-2/3 lg:w-2/6 justify-end h-10 ">
        <div className="w-3/4">
          <form onSubmit={handleSearch}>
            <Search name="searchBar" />
          </form>
        </div>
        <div className="flex gap-1 w-1/4 h-full items-center justify-evenly">
          <CartUser />
        </div>
      </div>
    </div>
  );
};

export default Header;
