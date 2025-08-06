import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../components/itemdetail/ItemDetail";
import { getProductById } from "../services/firebase"; // <-- asegurate que esté bien


const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(itemId)
      .then((res) => setProducto(res))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <p>Cargando...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return <ItemDetail {...producto} />;
};

export default ItemDetailContainer;
