import AboutImage from "../../public/images/AboutImage.png";
import FooterPage from "../components/Fragments/FooterPage";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="md:flex mt-5 gap-2">
          <div className="w-full h-80 msm:w-80 md:w-[65%] md:h-96 md:order-2">
            <img
              src={AboutImage}
              alt="About Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-3 md:w-[45%] md:order-1">
            <h1 className="text-3xl font-semibold">Our Story</h1>
            <p className="mt-6 mb-3 text-sm text-justify">
              Founded in 2024, BukaToko has become Southeast Asia’s leading
              online shopping platform with a strong presence in Indonesia.
              Offering a wide array of customized marketing, data-driven
              insights, and exceptional service solutions, BukaToko connects
              over 10,500 sellers and 300 renowned brands to millions of
              customers across the region.
            </p>
            <p className="text-sm text-justify">
              With a growing catalog of over 1 million products, BukaToko
              continues to expand rapidly, catering to various needs with
              categories ranging from daily essentials to unique specialty
              items.
            </p>
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default AboutPage;
