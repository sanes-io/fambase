import { useMutation, useQueryClient } from '@tanstack/react-query';
import { submitItem } from '../../../services/shoppingListApi';
import toast from 'react-hot-toast';

export const useAddItem = () => {
  const queryClient = useQueryClient();

  const { mutate: addItem } = useMutation({
    mutationFn: submitItem,
    onSuccess: () => {
      toast.success('Item added to list');
      void queryClient.invalidateQueries({ queryKey: ['shopping-list-items'] });
    },
    onError: () => {
      toast.error('Error adding item to list');
    },
  });
  return { addItem };
};
