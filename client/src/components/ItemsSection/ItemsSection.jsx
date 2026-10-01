import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../store/items/itemsSlice";
import { Wrapper } from "../Wrapper";
import { ItemCard } from "../ItemCard";
import { Link } from "react-router-dom";
import { paths } from "../../paths";
import { Button } from "../Button";
import { useSort } from "../../hooks/useSort";
import styles from "./styles.module.css";

//
export function ItemsSection() {
  const { items, isLoading } = useSelector((state) => state.items);
  const { isDescSort, setIsDescSort, sortedItems } = useSort(items || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <div className={styles.sortSection}>
        <Wrapper className={styles.sortSection__menu}>
          <div className={styles.sortButtonsBlock}>
            <Button
              className={styles.sortBtn}
              onClick={() => setIsDescSort(!isDescSort)}
            >
              по цене {`${isDescSort ? "⬇" : "⬆"}`}
            </Button>

            <Button className={styles.sortBtn}>по названию</Button>
          </div>

          <Link to={paths.createItem}>
            <div className={styles.createItemBtn}>Добавить</div>
          </Link>
        </Wrapper>
      </div>

      <Wrapper className={styles.itemsGrid}>
        {sortedItems &&
          sortedItems.map((el) => {
            return <ItemCard key={el._id} {...el} />;
          })}
      </Wrapper>
    </div>
  );
}
