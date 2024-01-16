import { FC, useState } from 'react';

import Item from './Item';
import Spinner from '../../../components/Spinner';
import { useShoppingList } from '../hooks/useShoppingList';
import { useAddItem } from '../hooks/useAddItem';

const AllItems: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { isLoading, shoppingListItems } = useShoppingList('all');
  const { addItem } = useAddItem();

  if (isLoading) return <Spinner />;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addItem({
      item: inputValue,
      household: 1,
      listed: false,
    });
    setInputValue('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="flex items-center mt-10 mb-4">
          <input
            type="text"
            placeholder="Add item"
            className="flex-grow p-2 text-lg border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            value={inputValue}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="p-2 text-lg font-bold text-white bg-blue-500 hover:bg-blue-700 rounded-r-md"
          >
            Add
          </button>
        </div>
      </form>
      {shoppingListItems.map((item) => {
        return (
          <Item
            id={item.id}
            key={item.item}
            name={item.item}
            listed={item.listed}
            parent="AllItems"
          />
        );
      })}
    </div>
  );
};

export default AllItems;
