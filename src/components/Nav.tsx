import { signOut } from "firebase/auth";
import AppIcon from "../../public/favicon.ico";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
        navigate("/authPage");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      id="upper-part"
      className="flex justify-between mt-6 mx-8 items-center align-middle"
    >
      <div className="flex items-center gap-3 font-semibold text-lg">
        <img src={AppIcon} alt="AppIcon" className="h-auto w-8" />
        <h1>Todo</h1>
      </div>
      <button onClick={handelSignOut}>
        <span className="material-symbols-outlined">logout</span>
      </button>
    </div>
  );
}

export default Nav;
