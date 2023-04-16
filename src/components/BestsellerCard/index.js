import styles from "./BestsellerCard.module.scss";

function BestsellerCard(props) {
  return (
    <div
      className={`col-3 rounded-3 shadow position-relative ${
        styles["bestseller-card"]
      } ${
        !props.dark ? "bg-white" : `text-white ${styles["background-dark"]}`
      }`}
    >
      <div className={`${styles["bestseller-card-content"]} position-absolute`}>
        <h5>{props.category}</h5>
        <h4>{props.title}</h4>
        <p>{props.des}</p>
      </div>
      <div className="">
        <img className="img-fluid rounded-3" src={props.img} alt={props.alt} />
      </div>
    </div>
  );
}

export default BestsellerCard;
