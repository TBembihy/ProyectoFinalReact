import React from 'react';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';
import AddItemButton from '../AddItemButton/AddItemButton';

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <ItemQuantitySelector />
      <AddItemButton item={item} />
    </div>
  );
};

export default ItemDetail;
