import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  updateItem as updateItemApi,
  updateMultipleItems as updateMultipleItemsApi,
} from '../../../services/shoppingListApi';
import toast from 'react-hot-toast';

export const useUpdateShoppingListItem = () => {
  const queryClient = useQueryClient();

  const { mutate: updateItem } = useMutation({
    mutationFn: updateItemApi,
    onSuccess: () => {
      toast.success('Item updated');
      void queryClient.invalidateQueries({ queryKey: ['shopping-list-items'] });
    },
  });

  return { updateItem };
};

export const useUpdateMultipleItems = () => {
  const queryClient = useQueryClient();

  const { mutate: updateMultipleItems } = useMutation({
    mutationFn: updateMultipleItemsApi,
    onSuccess: () => {
      toast.success('Items updated');
      void queryClient.invalidateQueries({ queryKey: ['shopping-list-items'] });
    },
  });

  return { updateMultipleItems };
};
