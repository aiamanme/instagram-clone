import { useState } from "react";
import InstaWatermark from "../../images/Instagram-Wordmark.svg";
import FasebookLogo from "../../images/Facebook-icon.svg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { doc, setDoc } from "firebase/firestore";

function SignipPage({ pageSwitcher, setOnHomePageHandler }: any) {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userDetailsCollRef = doc(db, "userDetails", JSON.stringify(email));

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(userDetailsCollRef, {
        fullNameDoc: fullName,
        userNameDoc: username,
      });
      setOnHomePageHandler();
      localStorage.setItem("isLogined", "true");
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
            className="h-min w-[220px] mt-20"
          />
          <h1 className="text-[18px] text-gray-500 font-semibold pb-8">
            Sign UP to see photos and videos from your friends
          </h1>
          <button
            className="w-full bg-blue-500 hover:bg-blue-400 transition-all text-white py-2 rounded flex justify-center items-center gap-3"
            onClick={handleSignup}
          >
            <img src={FasebookLogo} alt="Facebook" className="h-auto w-5" />
            Signup with Facebook
          </button>
          <div className="flex justify-center items-center w-[25vw] py-3">
            <div className="bg-slate-600 h-[1px] w-[50%]" />
            <div className="mx-2">OR</div>
            <div className="bg-slate-600 h-[1px] w-[50%]" />
          </div>
          <input
            type="text"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded mb-4 text-[14px] bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded mb-4 text-[14px] bg-gray-50"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded mb-4 text-[14px] bg-gray-50"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded mb-4 text-[14px] bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h1 className="text-[13px] text-gray-500 pb-8">
            People who use our service may have uploaded your contact
            information to Instaclone.{" "}
            <span className="text-blue-400">Learn More</span>
          </h1>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-400 transition-all"
            onClick={handleSignup}
          >
            Sign Up
          </button>
          <h3 className="text-[14px] my-4">
            Already have one?{" "}
            <button
              onClick={pageSwitcher}
              className="text-blue-600 font-semibold cursor-pointer"
            >
              Log in
            </button>
          </h3>
        </div>
      </div>
    </>
  );
}

export default SignipPage;
