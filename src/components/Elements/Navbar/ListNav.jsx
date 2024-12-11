import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ListNav = (props) => {
  const Navigate = useNavigate();
  const { className } = props;

  const handleLogOut = () => {
    localStorage.removeItem("token");
    Swal.fire({
      title: "Success!",
      text: "Logged out successfully!",
      icon: "success",
    });
    Navigate("/login");
  };
  return (
    <>
      <ul className={className}>
        <li>
          <Link
            to="/"
            className="hover:underline hover:decoration-1  active:underline active:decoration-1"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="hover:underline hover:decoration-1  active:underline active:decoration-1"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:underline hover:decoration-1  active:underline active:decoration-1"
          >
            About
          </Link>
        </li>
        {localStorage.getItem("token") ? (
          <li>
            <button
              type="button"
              className="hover:underline hover:decoration-1"
              onClick={() => handleLogOut()}
            >
              Log Out
            </button>
          </li>
        ) : (
          <li>
            <Link to="/login" className="hover:underline hover:decoration-1">
              Login
            </Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default ListNav;
