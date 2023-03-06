import style from "./Account.module.css";
import Transaction from "../../components/Transactions/Transaction";

const Account = () => {
  return (
    <main className={`${style.main} bg-dark`}>
      <div className={style.header}>
        <h1>
          Welcome back
          <br />
        </h1>
        <button className={style.editButton}>Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Transaction />
    </main>
  );
};

export default Account;
