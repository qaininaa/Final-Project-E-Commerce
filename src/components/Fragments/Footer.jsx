import MenuFooter from "../Elements/MenuFooter";

const Footer = () => {
  return (
    <div className="bg-black text-white mt-28 p-5 px-8 ">
      <div className="flex flex-wrap gap-10 justify-between">
        <MenuFooter title="BukaToko" size="text-[18pt]">
          <li>Subscribe</li>
          <li className="">Get 10% off your first order</li>
          <li className="relative w-fit">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
              className="border-2 border-white bg-black p-2 rounded-md"
            />
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              <path
                d="M9.91196 12H3.99996L2.02296 4.13505C2.0103 4.08934 2.00259 4.0424 1.99996 3.99505C1.97796 3.27405 2.77196 2.77405 3.45996 3.10405L22 12L3.45996 20.896C2.77996 21.223 1.99596 20.737 1.99996 20.029C2.00198 19.9658 2.0131 19.9031 2.03296 19.843L3.49996 15"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
        </MenuFooter>
        <MenuFooter title="Support">
          <li className="w-48">
            Jl. Sudirman No. 12, Jakarta Selatan, Indonesia, 1872
          </li>
          <li>bukatoko@gmail.com</li>
          <li>+62-7713-183-37</li>
        </MenuFooter>
        <MenuFooter title="Account">
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Shop</li>
        </MenuFooter>
        <MenuFooter title="Quick Link">
          <li>Privacy Policy</li>
          <li>Terms Of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </MenuFooter>
      </div>
      <div className="flex justify-center text-gray-600 mt-10 text-sm">
        <h3>Copyright Rimel 2022. All right reserved</h3>
      </div>
    </div>
  );
};

export default Footer;
