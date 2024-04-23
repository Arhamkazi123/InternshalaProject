// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcomepage/Welcome";
import Signin from "./pages/Signin/Signin";
import Create from "./pages/Createacc/Create";
import Account from "./pages/Accountsettings/Account";
import Notfound from "./pages/Notfound/Notfound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/createaccount" element={<Create />} />
          <Route path="/accountsettings" element={<Account />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
