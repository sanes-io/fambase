import { FC } from 'react';

import Item from './Item';
import { useShoppingList } from '../hooks/useShoppingList';
import Spinner from '../../../components/Spinner';

const AllListedItems: FC = () => {
  const { isLoading, shoppingListItems } = useShoppingList('listed');

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col items-center">
      {shoppingListItems.map((item) => {
        return <Item key={item.item} name={item.item} listed={true} />;
      })}
    </div>
  );
};

export default AllListedItems;
