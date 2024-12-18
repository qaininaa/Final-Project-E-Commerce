import Category from "../components/Fragments/Category";
import BannerCarousel1 from "../components/Fragments/BannerCarousel";
import HomeLayout from "../components/Layouts/HomeLayout";
import CardProducts from "../components/Fragments/CardProducts";
import FooterPage from "../components/Fragments/FooterPage";

const HomePage = () => {
  return (
    <>
      <HomeLayout>
        <BannerCarousel1 />
        <div className="flex flex-col gap-16 mt-4 ">
          <Category />
          <CardProducts />
        </div>
      </HomeLayout>
      <FooterPage />
    </>
  );
};

export default HomePage;
