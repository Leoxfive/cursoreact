import carrito from "../assets/carrito-icon.png"
const CartWidget = () => {
  return (
    <div className="carrito">
        <img src={carrito} width={50} height={50} alt="Icono del carrito de compras" />
        <h2>6</h2>
    </div>
  )
}

export default CartWidget