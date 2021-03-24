import React, { useContext, useEffect, useState } from "react";
import { getProduct } from "../api/products/products";
import { CartContext } from "../context/CartContext";
import closeIcon from "../img/close.svg";
import { ItemCart } from "./ItemCart";
export interface IDataCart {
  id: number;
  name: string;
  category: number;
  price: number;
  discont: number;
  image: null;
  inOrder: number;
}
export const PopUpCart: React.FC = () => {
  const { changePopStatus } = useContext(CartContext);
  const [dataCart, setDataCart] = useState<Array<IDataCart>>([]);
  const updateWrapper = () => {
    let dataCart: any = localStorage.getItem("cart");
    if (dataCart) {
      dataCart = JSON.parse(dataCart);
      const arrId: any = [];
      dataCart.map((e: any) => {
        arrId.push(e.id);
        return e;
      });
      getProduct(arrId)
        .then((res) => {
          setDataCart(res.data);
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    updateWrapper();
  }, []);
  const changePopCartHandler = () => {
    if (changePopStatus) {
      changePopStatus();
    }
  };

  return (
    <div className="pop-up-cart">
      <div className="bg-lock" onClick={changePopCartHandler}></div>
      <div className="pop-cart-wrapper">
        <div className="top-line-cart">
          <h3 className="h3">Кошик</h3>
          <div className="close-pop-btn">
            <img src={closeIcon} onClick={changePopCartHandler} alt="" />
          </div>
        </div>
        {dataCart.length > 0 ? (
          <div className="cart-item-wrapper">
            {dataCart.map((e, i) => (
              <ItemCart content={e} key={i} updateWrapper={updateWrapper} />
            ))}
          </div>
        ) : (
          <div className="empty-cart">
            <h1 className="h1">Кошик порожній</h1>
          </div>
        )}
        {dataCart.length > 0 ? (
          <div className="all-price-wrapper">
            <div className="content-wrapper">
              <h3 className="h3">До сплати</h3>
              <p className="price-wrapper">
                <span>₴</span>
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
