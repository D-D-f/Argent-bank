import { useForm } from "react-hook-form";
import style from "./SignIn.module.css";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (id) => {
    console.log(JSON.stringify(id));
  };

  return (
    <main className={`${style.main} ${style.bgDark}`}>
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
