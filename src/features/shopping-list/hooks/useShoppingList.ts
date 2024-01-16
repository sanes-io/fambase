import { useQuery } from '@tanstack/react-query';
import {
  getAllItems,
  getAllListedItems,
} from '../../../services/shoppingListApi';

export const useShoppingList = (type: 'all' | 'listed') => {
  const queryFn = type === 'all' ? getAllItems : getAllListedItems;

  const {
    isLoading,
    data: shoppingListItems,
    error,
    refetch,
  } = useQuery({
    queryKey: ['shopping-list-items', type],
    queryFn,
  });

  return { isLoading, error, shoppingListItems, refetch };
};
