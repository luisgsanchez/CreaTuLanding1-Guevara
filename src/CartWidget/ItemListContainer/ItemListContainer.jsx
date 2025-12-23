import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <p>Próximamente vas a ver el catálogo de productos acá.</p>
    </div>
  );
};

export default ItemListContainer;
