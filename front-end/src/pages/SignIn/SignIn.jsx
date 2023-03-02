import { useForm } from "react-hook-form";
import style from "./SignIn.module.css";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const requete = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const reponse = await requete.json();
      console.log(reponse);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <main className={`${style.main} .bg-dark`}>
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
        </form>
      </section>
    </main>
  );
};

export default SignIn;
