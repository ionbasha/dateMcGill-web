import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LandingPage />} />
        <Route path = "/createaccount" element = {<CreateAccount />} />
        <Route path = "/login" element = {<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
