import style from "./Header.module.css";
import img from "../../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/Reducers/ProfilReducer";
import { getUserName } from "../../redux/Reducers/UserNameReducer";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const cookie = Cookies.get("token");

  const { userName } = useSelector((state) => ({
    ...state.UserNameReducer,
  }));

  console.log(userName);

  const handleDeleteCookie = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
    dispatch({
      type: "OUT_PROFILE",
    });
  };

  useEffect(() => {
    if (cookie) {
      setIsLoggedIn(true);
      dispatch(getUser(cookie));
      dispatch(getUserName(cookie));
    }
  }, [cookie, dispatch]);

  return (
    <nav className={style.mainNav}>
      <Link className={style.mainNavLogo} to="/">
        <img
          className={style.mainNavLogoImage}
          src={img}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isLoggedIn ? (
          <>
            <Link className={style.mainNavItem} to="/Account">
              <i className="fa fa-user-circle"></i>
              {userName?.body.userName}
            </Link>
            <Link
              onClick={handleDeleteCookie}
              className={style.mainNavItem}
              to="/Signin"
            >
              <i
                onClick={handleDeleteCookie}
                className="fa-solid fa-right-from-bracket"
              ></i>
              Signout
            </Link>
          </>
        ) : (
          <Link className={style.mainNavItem} to="/Signin">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
      {}
    </nav>
  );
};

export default Header;
