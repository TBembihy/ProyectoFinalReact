import React from 'react';

const Brief = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="brief">
      <h3>Resumen de compra</h3>
      {cartItems.map(item => (
        <p key={item.id}>{item.name} - Cantidad: {item.quantity}</p>
      ))}
      <p>Total: ${total}</p>
    </div>
  );
};

export default Brief;
