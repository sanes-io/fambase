import { FC, useState } from 'react';
import Item from './Item';

const AllItems: FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setItems([...items, inputValue]);
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
      {items.map((item) => {
        return <Item key={item} name={item} />;
      })}
    </div>
  );
};

export default AllItems;
