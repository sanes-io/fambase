import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteItem as deleteItemApi } from '../../../services/shoppingListApi';
import toast from 'react-hot-toast';

export const useDeleteItem = () => {
  const queryClient = useQueryClient();

  const { isPending, mutate: deleteItem } = useMutation({
    mutationFn: (id: number) => deleteItemApi(id),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: ['shopping-list-items'],
      });
      toast.success('Item deleted');
    },
    onError: (error) => {
      toast.error('Error deleting item');
      console.error(error);
    },
  });

  return { isPending, deleteItem };
};
