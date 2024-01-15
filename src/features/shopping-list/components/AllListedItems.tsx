import { FC, useState } from 'react';

import { ShoppingListItem } from '../../../services/shoppingListApi';
import Item from './Item';
import { useShoppingList } from '../hooks/useShoppingList';
import { useUpdateMultipleShoppingListItems } from '../hooks/useUpdateItem';
import Spinner from '../../../components/Spinner';

const AllListedItems: FC = () => {
  const {
    isLoading,
    shoppingListItems = [],
    refetch,
  } = useShoppingList('listed');
  const { updateMultipleShoppingListItems } =
    useUpdateMultipleShoppingListItems();
  const [checkedItems, setCheckedItems] = useState<ShoppingListItem[]>([]);

  if (isLoading) return <Spinner />;

  console.log(checkedItems);

  const handleClearList = () => {
    updateMultipleShoppingListItems(
      checkedItems.map((item) => {
        return {
          id: item.id,
          item: item.item,
          household: item.household,
          listed: false,
        };
      }),
    );
    setCheckedItems([]);
    void refetch();
  };

  return (
    <div className="flex flex-col items-center">
      {shoppingListItems.map((item) => {
        return (
          <Item
            id={item.id}
            key={item.item}
            name={item.item}
            listed={item.listed}
            parent="AllListedItems"
            onCheckedChange={(isChecked: boolean) => {
              setCheckedItems((prev) =>
                isChecked
                  ? [...prev, item]
                  : prev.filter((checkedItem) => checkedItem.id !== item.id),
              );
            }}
          />
        );
      })}
      {shoppingListItems.length ? (
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClearList}
        >
          Clear Shopping List
        </button>
      ) : (
        <p className="text-xl">No items in your shopping list</p>
      )}
    </div>
  );
};

export default AllListedItems;
