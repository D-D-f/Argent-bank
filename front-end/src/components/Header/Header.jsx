import style from "./Header.module.css";
import img from "../../assets/img/argentBankLogo.png";

const Header = () => {
  return (
    <nav className={style.mainNav}>
      <a className={style.mainNavLogo} href="./index.html">
        <img
          className={style.mainNavLogoImage}
          src={img}
          alt="Argent Bank Logo"
        />
        <h1 className={style.srOnly}>Argent Bank</h1>
      </a>
      <div>
        <a className={style.mainNavItem} href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Header;
