import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getAllProducts = async () => {
  const productosRef = collection(db, "productos");
  const snapshot = await getDocs(productosRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
export const getProductsByCategory = async (categoryId) => {
  const productosRef = collection(db, "productos");
  const q = query(productosRef, where("category", "==", categoryId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
export const getProductById = async (id) => {
  const docRef = doc(db, "productos", id);
  const snapshot = await getDoc(docRef);
  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() };
  } else {
    throw new Error("Producto no encontrado");
  }
};