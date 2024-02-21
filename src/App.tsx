import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import Pages from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages />} />
      <Route path="/home" element={<Home />} />
      <Route path="/authPage" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
