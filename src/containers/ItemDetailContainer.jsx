import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ItemDetail from "../components/itemdetail/ItemDetail";
import Loading from "../components/loading/Loading";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const { product, loading } = useProducts({ itemId });

  if (loading) {
    return (
      <div><Loading /></div>
    );
  }

  return (
    <div className="background"><ItemDetail {...product} /></div>
  );
};

export default ItemDetailContainer;