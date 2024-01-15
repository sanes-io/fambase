import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  updateItem,
  updateMultipleItems,
} from '../../../services/shoppingListApi';
import toast from 'react-hot-toast';

export const useUpdateShoppingListItem = () => {
  const queryClient = useQueryClient();

  const { mutate: updateShoppingListItem } = useMutation({
    mutationFn: updateItem,
    onSuccess: () => {
      toast.success('Item updated');
      void queryClient.invalidateQueries({ queryKey: ['shopping-list-items'] });
    },
  });

  return { updateShoppingListItem };
};

export const useUpdateMultipleShoppingListItems = () => {
  const queryClient = useQueryClient();

  const { mutate: updateMultipleShoppingListItems } = useMutation({
    mutationFn: updateMultipleItems,
    onSuccess: () => {
      toast.success('Items updated');
      void queryClient.invalidateQueries({ queryKey: ['shopping-list-items'] });
    },
  });

  return { updateMultipleShoppingListItems };
};
