import { useState } from "react";
import LoginPage from "./LoginPage";
import SingupPage from "./SignupPage";

function AuthPage({ setOnHomePageHandler }: any) {
  const [onLoginPage, setOnLoginPage] = useState(true);

  function pageSwitcher() {
    setOnLoginPage(!onLoginPage);
  }

  if (onLoginPage) {
    return <LoginPage pageSwitcher={pageSwitcher} setOnHomePageHandler={setOnHomePageHandler} />;
  } else {
    return <SingupPage pageSwitcher={pageSwitcher} setOnHomePageHandler={setOnHomePageHandler} />;
  }
}

export default AuthPage;
