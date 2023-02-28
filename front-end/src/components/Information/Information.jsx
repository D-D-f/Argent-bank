import style from "./Information.module.css";

const Information = ({ img, title, text }) => {
  return (
    <div className={style.featureItem}>
      <img src={img} alt="Chat Icon" className={style.featureIcon} />
      <h3 className={style.featureItemTitle}>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Information;
