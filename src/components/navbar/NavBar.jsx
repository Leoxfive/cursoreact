import { Link } from "react-router-dom";
import CartWidget from "../cartwidget/CartWidget";
import './navbar.css';

const NavBar = () => {
  return (
      <div className="navbar">
      <Link to="/"><h1>MensClothes</h1></Link>
      <ul className="categories">
        <li><Link to="/category/t-shirt">Remeras</Link></li>
        <li><Link to="/category/hoodie">Buzos</Link></li>
        <li><Link to="/category/shoe">Zapatillas</Link></li>
      </ul>
      <CartWidget />
      </div>
  );
};

export default NavBar;
