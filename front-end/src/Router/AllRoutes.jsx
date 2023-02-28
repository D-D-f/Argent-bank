import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import Home from "../pages/Home/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Signin" exact element={<SignIn />} />
    </Routes>
  );
};

export default AllRoutes;
