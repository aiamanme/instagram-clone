import { useState } from "react";
import InstaWatermark from "../../images/Instagram-Wordmark.svg";
import FasebookLogo from "../../images/Facebook-icon.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { EmailAuthCredential } from "firebase/auth/cordova";

function LoginPage({ pageSwitcher, setOnHomePageHandler }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setOnHomePageHandler();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center text-center flex-col">
        <div className="flex flex-col justify-center items-center w-[25vw]">
          <img
            src={InstaWatermark}
            alt="instclone watermark"
            className="h-auto w-[220px]"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded mb-4 text-[14px] bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded mb-4 text-[14px] bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-all"
            onClick={handleLogin}
          >
            Log In
          </button>
          <div className="flex flex-col py-4 gap-1">
            <h3 className="text-[14px]">
              Don't have a account?{" "}
              <button
                onClick={pageSwitcher}
                className="text-blue-600 font-semibold cursor-pointer"
              >
                Sing Up
              </button>
            </h3>
            <button className="font-medium text-[14px] text-blue-600 cursor-pointer">
              Forget Password!
            </button>
          </div>
          <div className="flex justify-center items-center w-[25vw] py-3">
            <div className="bg-slate-600 h-[1px] w-[50%]" />
            <div className="mx-2">OR</div>
            <div className="bg-slate-600 h-[1px] w-[50%]" />
          </div>
          <div className="flex justify-center items-center text-center">
            <img
              src={FasebookLogo}
              alt="Fasebook Logo"
              className="h-[20px] w-auto"
            />
            <h3 className="font-semibold text-[14px] mx-[10px] text-blue-600">
              Login with Facebook
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
