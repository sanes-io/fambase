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
      void queryClient.invalidateQueries({ queryKey: ['shopping-list-items'] });
      toast.success('Item updated');
    },
    onError: (error) => {
      toast.error('Error updating item');
      console.log(error);
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
    onError: (error) => {
      toast.error('Error updating items');
      console.log(error);
    },
  });

  return { updateMultipleItems };
};
