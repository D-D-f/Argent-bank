import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import Home from "../pages/Home/Home";
import Account from "../pages/Account/Account";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Signin" exact element={<SignIn />} />
      <Route path="/Compte" exact element={<Account />} />
    </Routes>
  );
};

export default AllRoutes;
