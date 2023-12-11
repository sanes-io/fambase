import supabase from './supabase';

interface ShoppingListItem {
  id: number;
  item: string;
  household: number;
  listed: boolean;
}

export async function getShoppingListItems(): Promise<ShoppingListItem[]> {
  const { data, error } = await supabase
    .from('shopping-list-items')
    .select('*');

  if (error) {
    console.error(error);
    throw new Error('Error getting shopping list items');
  }

  return data as ShoppingListItem[];
}
