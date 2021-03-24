import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import cartIcon from "../../img/shopping-cart.svg";
import "./header.sass";

export const Hedaer: React.FC = () => {
  const [cart, setCart] = useState<number>(0);
  const { cartLengh, changePopStatus } = useContext(CartContext);
  const changePopCartHandler = () => {
    if (changePopStatus) {
      changePopStatus();
    }
  };
  useEffect(() => {
    if (cartLengh) {
      setCart(cartLengh);
    }
    return;
  }, [cartLengh]);
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
            <span>{cart}</span>
          </div>
          <img src={cartIcon} alt="" onClick={changePopCartHandler} />
        </div>
      </div>
    </header>
  );
};
