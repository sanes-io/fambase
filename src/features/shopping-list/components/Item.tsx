import { FC } from 'react';

type ItemProps = {
  name: string;
  listed?: boolean;
};

const Item: FC<ItemProps> = ({ name }) => {
  return (
    <div className="border border-gray-300 rounded-2xl mx-4 md:mx-40 p-1 md:p-2 shadow-lg bg-white w-[60%]">
      <p className="py-2 md:py-4 flex justify-around text-lg md:text-xl">
        <span className="font-semibold text-gray-700">{name}</span>
        <input type="checkbox" className="transform scale-150" />
      </p>
    </div>
  );
};

export default Item;
