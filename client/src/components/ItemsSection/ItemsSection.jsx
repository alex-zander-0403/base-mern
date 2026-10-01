import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../store/items/itemsSlice";
import { Wrapper } from "../Wrapper";
import { ItemCard } from "../ItemCard";
import styles from "./styles.module.css";

//
export function ItemsSection() {
  const { items, isLoading } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <Wrapper className={styles.itemsGrid}>
        {items &&
          items.map((el) => {
            return <ItemCard key={el._id} {...el} />;
          })}
      </Wrapper>
    </div>
  );
}

// export default ItemsSection;
