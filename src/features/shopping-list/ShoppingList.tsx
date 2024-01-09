import React, { useState } from 'react';
import AllItems from './components/AllItems';
import AllListedItems from './components/AllListedItems';

const ShoppingList = () => {
  const [selectedTab, setSelectedTab] = useState('AllListedItems');

  return (
    <>
      <button onClick={() => setSelectedTab('AllListedItems')}>
        Shopping List
      </button>
      <button onClick={() => setSelectedTab('AllItems')}>All Items</button>

      {selectedTab === 'AllListedItems' ? <AllListedItems /> : <AllItems />}
    </>
  );
};

export default ShoppingList;
