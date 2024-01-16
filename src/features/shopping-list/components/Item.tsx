import { FC, useState } from 'react';

import { useUpdateShoppingListItem } from '../hooks/useUpdateItem';
import { useDeleteItem } from '../hooks/useDeleteItem';

import { HiTrash } from 'react-icons/hi2';

type ItemProps = {
  id: number;
  name: string;
  listed?: boolean;
  parent: string;
  isChecked?: boolean;
  // eslint-disable-next-line no-unused-vars
  onCheckedChange?: (isChecked: boolean) => void;
};

const Item: FC<ItemProps> = ({
  id,
  name,
  listed,
  parent,
  isChecked,
  onCheckedChange,
}) => {
  const { updateItem } = useUpdateShoppingListItem();
  const { deleteItem } = useDeleteItem();
  const [isListed, setIsListed] = useState<boolean>(listed);
  const [checked, setChecked] = useState<boolean>(isChecked);

  const handleListedChange = () => {
    updateItem({
      id: id,
      item: name,
      household: 1,
      listed: !listed,
    });
    setIsListed(!listed);
  };

  const handleCheckboxChange = () => {
    const newCheckedValue = !checked;
    setChecked(newCheckedValue);
    onCheckedChange(newCheckedValue);
  };

  const handleDeleteItem = (id: number) => {
    console.log(`Clicked delete item ${id}`);
    deleteItem(id);
  };

  return (
    <div className="border border-gray-300 rounded-2xl mx-4 md:mx-40 p-1 md:p-2 shadow-lg bg-white w-[60%]">
      <p className="py-2 md:py-4 flex justify-around text-lg md:text-xl">
        <span className="font-semibold text-gray-700">{name}</span>
        {parent === 'AllListedItems' ? (
          <input
            type="checkbox"
            className="transform scale-150"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleListedChange}
          >
            {isListed ? 'Remove' : 'Add'}
          </button>
        )}
        <button
          className="text-red-500 hover:text-red-700"
          type="button"
          onClick={() => handleDeleteItem(id)}
        >
          <HiTrash />
        </button>
      </p>
    </div>
  );
};

export default Item;
