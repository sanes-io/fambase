import React from 'react';
import Header from './Header';
import ShoppingList from '../features/shopping-list/ShoppingList';

export default function AppLayout() {
  return (
    <>
      <Header />
      <ShoppingList />
    </>
  );
}
