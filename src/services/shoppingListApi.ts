import supabase from './supabase';

interface ShoppingListItem {
  item: string;
  household: number;
  listed: boolean;
}

export const getAllItems = async (): Promise<ShoppingListItem[]> => {
  const { data, error } = await supabase
    .from('shopping-list-items')
    .select('*');

  if (error) {
    console.error(error);
    throw new Error('Error getting shopping list items');
  }

  return data as ShoppingListItem[];
};

export const getAllListedItems = async (): Promise<ShoppingListItem[]> => {
  const { data, error } = await supabase
    .from('shopping-list-items')
    .select('*')
    .eq('listed', true);

  if (error) {
    console.error(error);
    throw new Error('Error getting shopping list items');
  }

  return data as ShoppingListItem[];
};

export const submitShoppingListItem = async (newItem: ShoppingListItem) => {
  const { data, error } = await supabase
    .from('shopping-list-items')
    .insert([newItem])
    .select();

  if (error) {
    console.error(error);
    throw new Error('Error creating shopping list item');
  }

  return data as ShoppingListItem[];
};
