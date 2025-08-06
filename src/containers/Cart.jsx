import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, totalQuantity, totalPrice, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2>Tu carrito está vacío 🛒</h2>
        <Link to="/" className="cart-link">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Carrito de compras</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <p><strong>{item.name}</strong></p>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
          </div>
        ))}
      </div>

      <h3>Total: ${totalPrice()}</h3>
      <div className="cart-buttons">
        <button onClick={clearCart} className="cart-btn">Vaciar carrito</button>
        <Link to="/checkout" className="cart-btn checkout">Finalizar compra</Link>
      </div>
    </div>
  );
};

export default Cart;
