// import { Wrapper } from "../Wrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../store/items/itemsSlice";
import { Wrapper } from "../Wrapper";
// import styles from "./styles.module.css";

//
export function Items() {
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
      <Wrapper>
        {items &&
          items.map((el) => {
            return <p>{el.title}</p>;
          })}
      </Wrapper>
    </div>
  );
}

// export default Items;
