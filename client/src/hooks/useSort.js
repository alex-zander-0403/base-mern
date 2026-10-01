import { useMemo, useState } from "react";

//
export function useSort(data = []) {
  const [isDescSort, setIsDescSort] = useState(false);

  const sortedItems = useMemo(() => {
    const dataForSort = [...data];

    dataForSort.sort((a, b) => {
      if (+a.price < +b.price) return isDescSort ? 1 : -1;
      if (+a.price > +b.price) return isDescSort ? -1 : 1;

      return 0;
    });

    return dataForSort;
  }, [data, isDescSort]);

  return { isDescSort, setIsDescSort, sortedItems };
}
