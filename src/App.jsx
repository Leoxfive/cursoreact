import './App.css'
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
function App() {
  const saludo = "Hola Mundo";
  return (
   <div>
    <NavBar />
    <ItemListContainer saludo={"Bienvenido a MensClothes"} />
   </div>
  )
}

export default App
