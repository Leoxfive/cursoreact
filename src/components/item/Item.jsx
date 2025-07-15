import { Link } from "react-router-dom";
import './item.css'

const Item = ({ id, name, price , image  }) => {
  return (
    <div className="item">
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <img src={image} />
      <br />
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
