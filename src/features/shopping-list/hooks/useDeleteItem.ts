import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteItem as deleteItemApi } from '../../../services/shoppingListApi';
import toast from 'react-hot-toast';

export const useDeleteItem = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteItem } = useMutation({
    mutationFn: (id: number) => deleteItemApi(id),
    onSuccess: () => {
      toast.success('Item deleted');
      void queryClient.invalidateQueries({ queryKey: ['shopping-list-items'] });
    },
  });

  return { deleteItem };
};
