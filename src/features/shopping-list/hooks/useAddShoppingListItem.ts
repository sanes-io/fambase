import { useMutation, useQueryClient } from '@tanstack/react-query';
import { submitShoppingListItem } from '../../../services/shoppingListApi';
import toast from 'react-hot-toast';

export const useAddShoppingListItem = () => {
  const queryClient = useQueryClient();

  const { mutate: addShoppingListItem } = useMutation({
    mutationFn: submitShoppingListItem,
    onSuccess: () => {
      toast.success('Item added to list');
      void queryClient.invalidateQueries({ queryKey: ['shopping-list-items'] });
    },
    onError: () => {
      toast.error('Error adding item to list');
    },
  });
  return { addShoppingListItem };
};
