import React from 'react';

const AddItemButton = ({ item }) => {
  const handleAddToCart = () => {
    // Aquí puedes implementar la lógica para agregar el ítem al carrito
    console.log(`Agregaste ${item.name} al carrito`);
  };

  return <button onClick={handleAddToCart}>Agregar al carrito</button>;
};

export default AddItemButton;
