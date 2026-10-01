import { Link } from "react-router-dom";
import { paths } from "../../paths";
import styles from "./styles.module.css";

//
export function ItemCard({
  _id = "",
  title = "",
  desc = "",
  price = 0,
  itemImage = "",
}) {
  return (
    <Link to={`${paths.item}/${_id}`}>
      <div className={styles.itemCard}>
        <img className={styles.img} src={itemImage} alt="" />

        <div className={styles.itemInfo}>
          <div className={styles.itemInfo_left}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.desc}>{desc}</p>
            <span className={styles.price}>{price}$</span>
          </div>

          {/* <button>123</button> */}
        </div>
      </div>
    </Link>
  );
}
