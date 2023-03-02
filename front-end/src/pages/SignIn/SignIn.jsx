import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import style from "./SignIn.module.css";

const SignIn = () => {
  const [error, setError] = useState(false);
  const Navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const requete = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (requete.ok) {
        const reponse = await requete.json();
        document.cookie = `token=${reponse.body.token}`;
        Navigate("/Account");
      } else {
        setError(true);
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <main className={`${style.main} bg-dark`}>
      <section className={style.signInContent}>
        <i className={`fa fa-user-circle ${style.signInIcon}`}></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.inputWrapper}>
            <label htmlFor="username">Username</label>
            <input
              {...register("email")}
              type="email"
              id="username"
              autoComplete="username"
            />
          </div>
          <div className={style.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input
              {...register("password")}
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </div>
          <div className={style.inputRemember}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className={style.signInButton}>
            Sign In
          </button>
          {error && (
            <p Style="color: red; font-weight: bold">
              Votre email ou mot de passe est incorrect !
            </p>
          )}
        </form>
      </section>
    </main>
  );
};

export default SignIn;
