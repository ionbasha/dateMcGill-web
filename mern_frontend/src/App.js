import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LandingPage />} />
        <Route path = "/createaccount" element = {<CreateAccount />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = '/dashboard' element= {<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
