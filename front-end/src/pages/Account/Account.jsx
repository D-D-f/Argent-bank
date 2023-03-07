import style from "./Account.module.css";
import EditName from "../../components/EditName/EditName";
import Transaction from "../../components/Transactions/Transaction";
import { useSelector } from "react-redux";
import { useState } from "react";

const Account = () => {
  const [visibleForm, setVisibleForm] = useState(false);
  const { user } = useSelector((state) => ({ ...state.UserReducer }));
  const firstName = user?.body?.firstName;
  const lastName = user?.body?.lastName;

  const handleVisibleClick = () => {
    setVisibleForm(!visibleForm);
  };

  return (
    <main className={`${style.main} bg-dark`}>
      {visibleForm ? (
        <EditName visible={handleVisibleClick} />
      ) : (
        <div className={style.header}>
          <h1>
            Welcome back
            <br />
            {`${firstName} ${lastName}!`}
          </h1>
          <button className={style.editButton} onClick={handleVisibleClick}>
            Edit Name
          </button>
        </div>
      )}

      <h2 className="sr-only">Accounts</h2>
      <Transaction />
      <Transaction />
      <Transaction />
    </main>
  );
};

export default Account;
