import Header from "./components/Fragments/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <hr />
      <Outlet />
    </>
  );
}

export default App;
