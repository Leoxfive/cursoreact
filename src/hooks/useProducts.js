import { useEffect, useState } from "react";
import { getProducts, getProductById } from "../data/products";

const useProducts = ({ itemId = null, categoryId = null } = {}) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (itemId) {
      getProductById(itemId)
        .then(data => setProduct(data))
        .finally(() => setLoading(false));
    } else {
      getProducts()
        .then(data => {
          if (categoryId) {
            const filtered = data.filter(prod => prod.category === categoryId);
            setProducts(filtered);
          } else {
            setProducts(data);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [itemId, categoryId]);
  return { products, product, loading };
};

export default useProducts;
