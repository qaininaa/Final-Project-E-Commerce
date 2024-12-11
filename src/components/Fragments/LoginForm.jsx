import ButtonForm from "../Elements/ButtonForm";
import InputForm from "../Elements/Input";
import { useNavigate } from "react-router";
import { fetchLogin } from "../../services/auth.service";
import { useEffect, useRef, useState } from "react";
import TitleForm from "../Elements/TitleForm";
import Swal from "sweetalert2";

const LoginForm = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [verifUsername, setVerifUsername] = useState(true);
  const [verifPassword, setVerifPassword] = useState(true);
  const [bothVerif, setBothVerif] = useState("");
  const [valid, setValid] = useState(false);
  const Navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    fetchLogin(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        if (localStorage.getItem("token")) {
          Swal.fire({
            title: "Success!",
            text: "Logged in successfully!",
            icon: "success",
          });
          Navigate("/");
        } else {
          return redirect("/login");
        }
      } else {
        setBothVerif(res.response.data);
      }
    });

    if (usernameRef.current.value == "") {
      setVerifUsername(false);
      usernameRef.current.style.borderBottom = "2px solid red";
      usernameRef.current.focus();
    } else if (usernameRef.current.value && passwordRef.current.value == "") {
      setVerifPassword(false);
      passwordRef.current.style.borderBottom = "2px solid red";
      passwordRef.current.focus();
    } else if (bothVerif && verifPassword && verifUsername) {
      setValid(true);
    }
  };

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <>
      <TitleForm
        heading="Log in to BukaToko"
        subHeading="Enter your details below"
      />
      <form onSubmit={handleLogin}>
        <InputForm
          ref={usernameRef}
          type="text"
          name="username"
          placeholder="Username"
          onChange={() => {
            setVerifUsername(true);
            setValid(false);
            usernameRef.current.style.borderBottom = "2px solid #94a3b8";
          }}
        />
        {!verifUsername && <div className="text-red-500">Enter username</div>}
        <InputForm
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="Password"
          onChange={() => {
            setVerifPassword(true);
            setValid(false);
            passwordRef.current.style.borderBottom = "2px solid #94a3b8";
          }}
        />
        {!verifPassword && <div className="text-red-500">Enter password</div>}
        <div className="mt-5 lg:flex justify-between items-center">
          <ButtonForm type="submit">Login</ButtonForm>
          <p className="text-red-500 ">Forgot password?</p>
        </div>
        {valid && (
          <div className="text-center text-red-500">
            Username or password is incorrect
          </div>
        )}
      </form>
    </>
  );
};

export default LoginForm;
