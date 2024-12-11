import ButtonCarousel from "../Elements/ButtonCarousel";
import iphoneBanner from "../public/images/iphoneBanner.png";

const classNameButton =
  "group absolute w-8 h-8 top-1/2 transform -translate-y-1/2 hover:bg-slate-500 hover:opacity-70 rounded-full xsm:w-9 xsm:h-9 md:w-12 md:h-12 flex justify-center items-center";
const classNameIconButton =
  "hidden group-hover:block xsm:w-[24px] xsm:h-[24px] md:w-[30px] md:h-[30px]";

const BannerCarousel1 = () => {
  return (
    <div className="md:h-80 w-full flex justify-center h-56 bg-blue-200">
      <div className="w-full relative md:h-full bg-black">
        {/* gambar iphone */}
        <img
          src={iphoneBanner}
          alt="Iphone"
          className="w-44 h-40 xsm:w-48 xsm:h-44 right-0 sm:right-5 md:w-96 md:h-72 sm:w-60 sm:h-48  absolute bottom-1 "
        />

        {/* text banner */}
        <div className="absolute left-7 w-32 xsm:w-36 xsm:left-10 sm:left-14 top-5 md:left-20 sm:w-80 lg:w-96 msm:w-44">
          <div className=" flex items-center gap-3 ">
            <img src="../public/images/appleLogo.png" alt="" className="w-6" />
            <p className="text-white text-xs xsm:text-sm">Iphone 15 Series</p>
          </div>

          <p className="text-white mt-3 text-xl xsm:text-2xl font-semibold sm:text-4xl md:text-6xl msm:text-3xl">
            Up to 10% off Voucher
          </p>

          <div className="flex items-center gap-2 mt-10">
            <a href="" className="text-white text-xs sm:text-sm md:text-lg">
              Shop Now <hr />
            </a>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 12H20M20 12L13 5M20 12L13 19"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <ButtonCarousel
          classNameButton={classNameButton}
          classNameIconButton={classNameIconButton}
        />
      </div>
    </div>
  );
};

export default BannerCarousel1;
