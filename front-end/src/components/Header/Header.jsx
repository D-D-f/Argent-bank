import style from "./Header.module.css";
import img from "../../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className={style.mainNav}>
      <Link className={style.mainNavLogo} to="/">
        <img
          className={style.mainNavLogoImage}
          src={img}
          alt="Argent Bank Logo"
        />
        <h1 className={style.srOnly}>Argent Bank</h1>
      </Link>
      <div>
        <Link className={style.mainNavItem} to="/Signin">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Header;
