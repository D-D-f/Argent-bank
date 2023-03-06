import style from "./Header.module.css";
import img from "../../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => ({ ...state.UserReducer }));
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
        {user.status === 200 ? (
          <>
            <Link className={style.mainNavItem} to="/Account">
              <i className="fa fa-user-circle"></i>
              {user.body.firstName}
            </Link>
            <Link className={style.mainNavItem} to="/Signin">
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
    </nav>
  );
};

export default Header;
