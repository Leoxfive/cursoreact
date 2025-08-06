import './itemDetail.css';
import { useState, useContext } from 'react';
import ItemCount from '../itemcount/ItemCount';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, price, image, description, stock }) => {
  const [agregado, setAgregado] = useState(false);
  const { addItem } = useContext(CartContext);

  const handleAgregar = (cantidad) => {
    const item = { id, name, price };
    addItem(item, cantidad);
    setAgregado(true);
  };

  return (
    <div className="item-detail-card">
      <h2>{name}</h2>
      <p className="precio">${price}</p>
      <div className="item-detail-content">
        <img src={image} alt={name} className="item-detail-img" />
        <div className="item-detail-desc">
          <p>{description}</p>
          <p>Stock: {stock}</p>

          {agregado ? (
            <p style={{ marginTop: '20px', fontWeight: 'bold', color: 'green' }}>
              Producto agregado al carrito ✔
            </p>
          ) : (
            <ItemCount stock={stock} initial={1} onAdd={handleAgregar} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
