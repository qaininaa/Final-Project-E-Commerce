import { useEffect, useState } from "react";
import { usernameProfile } from "../services/auth.service";
import { PiUserCircleLight } from "react-icons/pi";

const ProfilePage = () => {
  const [username, setUsername] = useState("");

  const styleBtn = "hover:bg-gray-200 p-2 rounded-md ";

  useEffect(() => {
    const token = localStorage.getItem("token");
    usernameProfile(token, (data) => {
      setUsername(data);
    });
  }, []);
  return (
    <>
      <div className="flex flex-col items-center mt-6 font-poppins">
        <div className="flex flex-col items-center bg-gray-300 msm:bg-none w-full py-1">
          <PiUserCircleLight size={80} />
          <h1 className="text-xl">{username}</h1>
        </div>
        <div className="flex flex-col items-center mt-5 gap-3">
          <button type="button" className={`${styleBtn}`}>
            My Orders
          </button>
          <button type="button" className={`${styleBtn}`}>
            Change Password
          </button>
          <button type="button" className={`${styleBtn}`}>
            Terms & conditions
          </button>
          <button type="button" className={`${styleBtn}`}>
            Privacy policy
          </button>
          <button type="button" className={`${styleBtn}`}>
            Contact us
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
