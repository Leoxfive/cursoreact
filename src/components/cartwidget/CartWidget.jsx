import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const quantity = totalQuantity();

  return (
    <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <FaShoppingCart size={24} />
        <span>{quantity}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
