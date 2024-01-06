import { useState, useEffect } from "react";
import { auth } from "../../config/firebase";
import { User, onAuthStateChanged, signOut } from "firebase/auth";

function HomePage({ setOnHomePageHandler }: any) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      if (user) {
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
      }
    });
  
    return () => unsubscribe();
  }, []);

  function logoutFromPage() {
    signOut(auth)
    setOnHomePageHandler()
  }
  
  return (
    <>
      <h1>{currentUser?.email}</h1>
      <p>Home Page is hear</p>
      <button onClick={logoutFromPage}>Log Out</button>
    </>
  );
}

export default HomePage;
