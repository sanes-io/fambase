import React from 'react';
import Header from './Header';
import ShoppingList from '../features/shopping-list/ShoppingList';

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="bg-gray-50 py-16 mx-auto min-w-[40%]">
        <ShoppingList />
      </main>
    </div>
  );
}
