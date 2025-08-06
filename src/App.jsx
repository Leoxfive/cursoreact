import './App.css'
import NavBar from "./components/navbar/NavBar"
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './containers/Cart'
import CheckoutForm from './components/checkout/CheckoutForm';

function App() {
  return (
   <>
   <CartProvider>
    <NavBar />
     <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Routes>
      </CartProvider>
   </>
  )
}

export default App
