import carrito from "../../assets/carrito-icon.png";

const CartWidget = () => {
  return (
    <div className="carrito">
      <img src={carrito} width={40} height={40} alt="Carrito de compras" />
      <span>6</span>
    </div>
  );
};

export default CartWidget;
