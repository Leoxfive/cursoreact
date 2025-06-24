import "./navbar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="navbar">
        <h1>MensClothes</h1>
        <ul className="categories">
            <li>Remeras</li>
            <li>Buzos</li>
            <li>Zapatillas</li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default NavBar;