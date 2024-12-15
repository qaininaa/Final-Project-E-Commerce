import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center flex-col gap-12 items-center h-screen">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl md:text-7xl font-semibold">404 Not Found</h1>
        <h2 className="text-xs md:text-sm">
          Your visited page not found. You may go home page.
        </h2>
      </div>
      <button
        type="button"
        className="bg-red-500 hover:opacity-70 text-white py-3 rounded-md px-7"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
