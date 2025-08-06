import { useEffect, useState } from "react";
import { getAllProducts, getProductsByCategory } from "../services/firebase";

const useProducts = ({ categoryId = null } = {}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchProducts = categoryId ? getProductsByCategory : getAllProducts;

    fetchProducts(categoryId)
      .then(setProducts)
      .catch((err) => console.error("Error al obtener productos:", err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return { products, loading };
};

export default useProducts;
