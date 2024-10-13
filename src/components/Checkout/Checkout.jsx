import React from 'react';

const Checkout = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <h2>Resumen de tu compra</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.name} x {item.quantity}</p>
          <p>${item.price * item.quantity}</p>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button>Pagar</button>
    </div>
  );
};

export default Checkout;
