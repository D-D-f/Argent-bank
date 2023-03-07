import style from "./Account.module.css";
import EditName from "../../components/EditName/EditName";
import Transaction from "../../components/Transactions/Transaction";
import { useSelector } from "react-redux";

const Account = () => {
  const user = useSelector((state) => ({ ...state.UserReducer }));
  const firstName = user?.user?.body?.firstName;
  const lastName = user?.user?.body?.lastName;
  console.log(user);
  return (
    <main className={`${style.main} bg-dark`}>
      <div className={style.header}>
        <h1>
          Welcome back
          <br />
          {`${firstName} ${lastName}!`}
        </h1>
        <button className={style.editButton}>Edit Name</button>
        <EditName firstName={firstName} lastName={lastName} />
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Transaction />
    </main>
  );
};

export default Account;
