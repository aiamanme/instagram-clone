import { useEffect, useState } from "react";
import HomePage from "./pages/home";
import AuthPage from "./pages/auth";

function App() {
  const [onHomePage, setOnHomePage] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLogined") == null) {
      localStorage.setItem("isLogined", "[]");
    }
  }, []);

  function setOnHomePageHandler() {
    setOnHomePage(!onHomePage);
    localStorage.setItem("isLogined", JSON.stringify(onHomePage));
  }

  if (localStorage.getItem("isLogined") == "true") {
    return <HomePage setOnHomePageHandler={setOnHomePageHandler} />;
  } else {
    return <AuthPage setOnHomePageHandler={setOnHomePageHandler} />;
  }
}

export default App;
