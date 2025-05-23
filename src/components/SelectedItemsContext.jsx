import React, { createContext, useContext, useState } from 'react';

const SelectedItemsContext = createContext();

export function SelectedItemsProvider({ children }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const addItem = name =>
    setSelectedItems(prev => prev.includes(name) ? prev : [...prev, name]);
  const removeItem = name =>
    setSelectedItems(prev => prev.filter(i => i !== name));

  return (
    <SelectedItemsContext.Provider value={{ selectedItems, addItem, removeItem }}>
      {children}
    </SelectedItemsContext.Provider>
  );
}

export function useSelectedItems() {
  const ctx = useContext(SelectedItemsContext);
  if (!ctx) {
    throw new Error('useSelectedItems must be used within SelectedItemsProvider');
  }
  return ctx;
}
