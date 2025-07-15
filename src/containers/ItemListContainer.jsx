import { useParams } from "react-router-dom";
import ItemList from "../components/itemlist/ItemList";
import useProducts from "../hooks/useProducts";
import Loading from "../components/loading/Loading";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const {products, loading} = useProducts( {categoryId});
 
  return (
    <div >
      {
        loading ? <Loading /> : <ItemList products={products} />
      }
    </div>
  );
};

export default ItemListContainer;