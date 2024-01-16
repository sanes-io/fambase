import supabase from './supabase';

type NewShoppingListItem = {
  item: string;
  household: number;
  listed: boolean;
};

export type ShoppingListItem = {
  id: number;
  item: string;
  household: number;
  listed: boolean;
};

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

export const submitItem = async (newItem: NewShoppingListItem) => {
  const { data, error }: { data: unknown; error: unknown } = await supabase
    .from('shopping-list-items')
    .insert([newItem])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Error creating shopping list item');
  }

  return data as ShoppingListItem[];
};

export const updateItem = async (item: ShoppingListItem) => {
  const { data, error }: { data: unknown; error: unknown } = await supabase
    .from('shopping-list-items')
    .update(item)
    .eq('id', item.id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Error updating shopping list item');
  }

  return data as ShoppingListItem;
};

export const updateMultipleItems = async (items: ShoppingListItem[]) => {
  const { data, error }: { data: unknown; error: unknown } = await supabase
    .from('shopping-list-items')
    .upsert(items);

  if (error) {
    console.error(error);
    throw new Error('Error updating shopping list items');
  }

  return data as ShoppingListItem[];
};

export const deleteItem = async (itemId: number) => {
  console.log(`Item id received in deleteItem: ${itemId}`);
  const { error }: { error: unknown } = await supabase
    .from('shopping-list-items')
    .delete()
    .eq('id', itemId);

  if (error) {
    console.error(error);
    throw new Error('Error deleting shopping list item');
  }
};
