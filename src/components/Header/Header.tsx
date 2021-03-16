import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import cartIcon from "../../img/shopping-cart.svg";
import "./header.sass";

export const Hedaer: React.FC = () => {
  const { cartLengh } = useContext(CartContext);
  return (
    <header className="site-header">
      <div className="logo-wrapper">
        <Link to="/">
          <p>logo-wrapper</p>
        </Link>
      </div>
      <div className="nav-bar-wrapper">
        <nav className="main-nav">
          <ul>
            <li>
              {" "}
              <Link to="/catalog">Каталог</Link>{" "}
            </li>
            <li>
              <Link to="/new-product">Новинки</Link>
            </li>
            <li>
              <Link to="/sale">Акції</Link>
            </li>
            <li>
              <Link to="/contacts">Контакти</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="cart-wrapper">
        <div className="span-cart">
          <div className="cart-count">
            <span>{cartLengh ? cartLengh : 0}</span>
          </div>
          <img src={cartIcon} alt="" />
        </div>
      </div>
    </header>
  );
};
