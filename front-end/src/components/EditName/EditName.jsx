import { useForm } from "react-hook-form";
import style from "./EditName.module.css";

const EditName = ({ firstName, lastName }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        <label htmlFor="userName">User Name: </label>
        <input {...register("userName")} type="text" name="userName" />
      </p>
      <p>
        <label htmlFor="firstName">First Name: </label>
        <input type="text" name="firstName" value={firstName} disabled />
      </p>
      <p>
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" name="lastName" value={lastName} disabled />
      </p>
      <div className={style.allBtn}>
        <button type="submit" className={`sign-in-button ${style.btnEdit}`}>
          Save
        </button>
        <button className={`sign-in-button ${style.btnEdit}`}>Cancel</button>
      </div>
    </form>
  );
};

export default EditName;
