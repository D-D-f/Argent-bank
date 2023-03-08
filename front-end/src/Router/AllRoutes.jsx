import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import SignIn from "../pages/SignIn/SignIn";
import Home from "../pages/Home/Home";
import Account from "../pages/Account/Account";
import NotFound from "../pages/NotFound/NotFound";

const AllRoutes = () => {
  const { auth } = useSelector((state) => ({
    ...state.AuthReducer,
  }));
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Signin" exact element={<SignIn />} />
      {auth ? (
        <Route path="/Account" exact element={<Account />} />
      ) : (
        <Route path="/*" exact element={<NotFound />} />
      )}
      <Route path="/*" exact element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
