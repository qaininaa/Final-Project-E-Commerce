import { PiTShirtThin } from "react-icons/pi";
import { PiDressThin } from "react-icons/pi";
import { CiMonitor } from "react-icons/ci";
import { GiDoubleNecklace } from "react-icons/gi";
import { PiGameControllerThin } from "react-icons/pi";
import HeadingChose from "../Elements/HeadingChose";
import { useContext } from "react";
import { CategoryCon } from "../context/CategoryContext";
import { useDispatch } from "react-redux";
import { filterProduct } from "../../redux/actions/products-action";
import { AiOutlineProduct } from "react-icons/ai";
import ButtonCategory from "../Elements/Button/ButtonCategory";

const classLogo =
  "group-hover:fill-white w-[32px] h-[32px] sm:w-[42px] sm:h-[42px]";
const classButtonCat =
  "group cursor-pointer rounded hover:border-red-600 hover:bg-red-600 border-2 border-slate-400 w-28 h-20 sm:w-32 sm:h-28 flex justify-center flex-col items-center p-1";

const classTitleCat =
  "group-hover:text-white text-xs xsm:text-sm group-hover:font-medium text-center";

const Category = () => {
  const { category, setCategory } = useContext(CategoryCon);
  const dispatch = useDispatch();

  return (
    <div>
      <HeadingChose heading="Category" subHeading="Browse By Category" />
      <div className="flex flex-wrap gap-2 justify-start xsm:justify-evenly msm:justify-evenly lg:justify-between">
        <ButtonCategory
          classTitleCat={classTitleCat}
          titleCategory="All"
          classButtonCat={classButtonCat}
          onClick={() => {
            dispatch(filterProduct(""));
            dispatch({ type: "FILTER_PRODUCTS", payload: [] });
            setCategory("All");
          }}
        >
          <AiOutlineProduct className={classLogo} />
        </ButtonCategory>
        <ButtonCategory
          classTitleCat={classTitleCat}
          titleCategory="Men's clothing"
          classButtonCat={classButtonCat}
          onClick={() => {
            dispatch(filterProduct("men's clothing"));
            setCategory("Men's clothing");
          }}
        >
          <PiTShirtThin className={classLogo} />
        </ButtonCategory>
        <ButtonCategory
          classTitleCat={classTitleCat}
          titleCategory="Women's clothing"
          classButtonCat={classButtonCat}
          onClick={() => {
            dispatch(filterProduct("women's clothing"));
            setCategory("Women's clothing");
          }}
        >
          <PiDressThin className={classLogo} />
        </ButtonCategory>
        <ButtonCategory
          classTitleCat={classTitleCat}
          titleCategory="Eletronics"
          classButtonCat={classButtonCat}
          onClick={() => {
            dispatch(filterProduct("electronics"));
            setCategory("Electronics");
          }}
        >
          <CiMonitor className={classLogo} />
        </ButtonCategory>
        <ButtonCategory
          classTitleCat={classTitleCat}
          titleCategory="Jewelery"
          classButtonCat={classButtonCat}
          onClick={() => {
            dispatch(filterProduct("jewelery"));
            setCategory("Jewelery");
          }}
        >
          <GiDoubleNecklace className={classLogo} />
        </ButtonCategory>
        <ButtonCategory
          classTitleCat={classTitleCat}
          titleCategory="Gaming"
          classButtonCat={classButtonCat}
        >
          <PiGameControllerThin className={classLogo} />
        </ButtonCategory>
      </div>
    </div>
  );
};

export default Category;
