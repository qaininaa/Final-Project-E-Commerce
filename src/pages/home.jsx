import Category from "../components/Fragments/Category";
import BannerCarousel1 from "../components/Fragments/BannerCarousel";
import HomeLayout from "../components/Layouts/HomeLayout";
import CardProducts from "../components/Fragments/CardProducts";

const HomePage = () => {
  return (
    <HomeLayout>
      <BannerCarousel1 />
      <div className="flex flex-col gap-16 mt-4 ">
        <Category />
        <CardProducts />
      </div>
    </HomeLayout>
  );
};

export default HomePage;
