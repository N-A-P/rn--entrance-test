import {useEffect, useMemo, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {getCategoryList} from '../../redux/category/actions';

function transformTo2DArray<T = any>(arr: T[], itemsPerSubArray: number) {
  const twoDArray = [];

  for (let i = 0; i < arr.length; i += itemsPerSubArray) {
    const subArray = arr.slice(i, i + itemsPerSubArray);
    twoDArray.push(subArray);
  }

  return twoDArray;
}

export function useCategoryController() {
  // const [categories, setCate] = useState('')
  const {data} = useAppSelector(s => s.category);
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState<Array<number>>([]);

  const onSelect = (id: number) => {
    if (selected.includes(id)) {
      setSelected(s => s.filter(f => f !== id));
    } else {
      setSelected(s => [...s, id]);
    }
  };

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  const categories = useMemo(() => transformTo2DArray(data, 3), [data]);
  return {
    categories,
    selected,
    onSelect,
  };
}
