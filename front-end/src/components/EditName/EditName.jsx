import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { changeUserName } from "../../apis/changeUserName";
import style from "./EditName.module.css";

const EditName = ({ visible }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({
    ...state.UserReducer,
  }));
  const firstName = user?.body?.firstName;
  const lastName = user?.body?.lastName;
  const { register, handleSubmit } = useForm();
  const cookie = Cookies.get("token");

  const onSubmit = async (data) => {
    try {
      const changeName = await changeUserName(data, cookie);
      if (changeName) {
        dispatch({
          type: "SET_USERNAME",
          payload: changeName,
        });
      }
      visible();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        <label htmlFor="userName">User Name: </label>
        <input {...register("userName")} type="text" name="userName" />
      </p>
      <p>
        <label htmlFor="firstName">First Name: </label>
        <input type="text" name="firstName" defaultValue={firstName} disabled />
      </p>
      <p>
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" name="lastName" defaultValue={lastName} disabled />
      </p>
      <div className={style.allBtn}>
        <button type="submit" className={`sign-in-button ${style.btnEdit}`}>
          Save
        </button>
        <button className={`sign-in-button ${style.btnEdit}`} onClick={visible}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditName;
