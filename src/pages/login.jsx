import LoginForm from "../components/Fragments/LoginForm";

const LoginPage = () => {
  return (
    <div
      className="flex justify-center items-center lg:gap-10 lg:pr-20 lg:pt-12"
      style={{ height: "calc(100vh - 100px)" }}
    >
      <div className="hidden lg:block lg:w-2/3 lg:h-full">
        <img
          src="../public/images/Side Image.png"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="lg:w-1/3 w-60 xsm:w-72 msm:w-1/2">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
