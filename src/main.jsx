import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import AboutPage from "./pages/about.jsx";
import HomePage from "./pages/home.jsx";
import LoginPage from "./pages/login.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import DetailProductPage from "./pages/detailProduct.jsx";
import CartPage from "./pages/cart.jsx";
import ErrorPage from "./pages/error.jsx";
import CategoryContextProvider from "./components/context/CategoryContext.jsx";
import ProfilePage from "./pages/profile.jsx";
import ContactPage from "./pages/contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "/detail/:id",
        element: <DetailProductPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
        loader: () => {
          if (!localStorage.getItem("token")) {
            return redirect("/login");
          }
          return null;
        },
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <CategoryContextProvider>
        <RouterProvider router={router} />
      </CategoryContextProvider>
    </Provider>
  </StrictMode>
);
