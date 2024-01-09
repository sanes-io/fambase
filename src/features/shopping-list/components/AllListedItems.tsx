import { FC } from 'react';

import ListedItem from './ListedItem';
//import Spinner from '../../../components/Spinner';

const AllListedItems: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <ListedItem name="Milk" />
    </div>
  );
};

export default AllListedItems;
