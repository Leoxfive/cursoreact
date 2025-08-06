import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    confirmarEmail: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que los emails coincidan
    if (form.email !== form.confirmarEmail) {
      alert("Los correos electrónicos no coinciden.");
      return;
    }

    const orden = {
      comprador: {
        nombre: form.nombre,
        telefono: form.telefono,
        email: form.email,
      },
      items: cart.map(item => ({
        id: item.id,
        nombre: item.name,
        precio: item.price,
        cantidad: item.quantity,
      })),
      total: totalPrice(),
      fecha: new Date(),
    };

    try {
      const ordenRef = collection(db, "ordenes");
      const docRef = await addDoc(ordenRef, orden);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al generar la orden:", error);
    }
  };

  if (orderId) {
    return (
      <div className="checkout-confirmation">
        <h2>¡Gracias por tu compra! 🛍️</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <div className="checkout-form">
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="confirmarEmail"
          placeholder="Confirmar correo"
          value={form.confirmarEmail}
          onChange={handleChange}
          required
        />
        <button type="submit">Generar orden</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
