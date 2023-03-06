import style from "./Header.module.css";
import img from "../../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/Reducers/ProfilReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({
    ...state.UserReducer,
    ...state.TokenReducer,
  }));
  const cookie = Cookies.get("token");
  useEffect(() => {
    if (cookie) {
      dispatch(getUser(cookie));
    }
  }, []);

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
        {user !== null ? (
          <>
            <Link className={style.mainNavItem} to="/Account">
              <i className="fa fa-user-circle"></i>
              {user.body.firstName}
            </Link>
            <Link className={style.mainNavItem} to="/">
              <i className="fa-solid fa-right-from-bracket"></i>
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
