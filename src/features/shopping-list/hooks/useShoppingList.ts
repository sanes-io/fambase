import { useQuery } from '@tanstack/react-query';
import { getShoppingListItems } from '../../../services/shoppingListApi';

export const useShoppingList = () => {
  const {
    isLoading,
    data: shoppingListItems,
    error,
  } = useQuery({
    queryKey: ['shopping-list-items'],
    queryFn: getShoppingListItems,
  });
  return { isLoading, error, shoppingListItems };
};
