import './App.css'
import NavBar from "./components/navbar/NavBar"
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
    <NavBar />
     <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Routes>
   </>
  )
}

export default App
