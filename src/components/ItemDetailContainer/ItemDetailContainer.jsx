import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ itemId }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Simula la obtención de datos, puedes hacer una llamada a la API aquí.
    const fetchItem = async () => {
      const response = await fetch(`/api/items/${itemId}`);
      const data = await response.json();
      setItem(data);
    };

    fetchItem();
  }, [itemId]);

  return <>{item ? <ItemDetail item={item} /> : <p>Loading...</p>}</>;
};

export default ItemDetailContainer;