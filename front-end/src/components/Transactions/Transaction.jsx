import style from "./Transaction.module.css";

const Transaction = () => {
  return (
    <section className={style.account}>
      <div className={style.accountContentWrapper}>
        <h3 className={style.accountTitle}>Argent Bank Savings (x6712)</h3>
        <p className={style.accountAmount}>$10,928.42</p>
        <p className={style.accountAmountDescription}>Available Balance</p>
      </div>
      <div className={`${style.accountContentWrapper}${style.cta}`}>
        <button className={style.transactionButton}>View transactions</button>
      </div>
    </section>
  );
};

export default Transaction;
