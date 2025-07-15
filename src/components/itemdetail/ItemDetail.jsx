import './itemDetail.css'

const ItemDetail = ({ name, price, image, description , stock }) => {
  return (
    <div className="item-detail-card">
      <h2>{name}</h2>
      <p className="precio">${price}</p>
      <div className="item-detail-content">
        <img src={image} alt={name} className="item-detail-img" />
        <p className="item-detail-desc">{description}</p>
        <p className="item-detail-desc"> Stock: {stock} </p>
      </div>
      <button className="item-detail-btn">Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;
