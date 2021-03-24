import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import closeIcon from "../img/close.svg";
import { IDataCart } from "./PopUpCart";
type TProprs = {
  content: IDataCart;
  updateWrapper: () => void;
};
export const ItemCart: React.FC<TProprs> = ({ content, updateWrapper }) => {
  const { changeAmount, removeInCart } = useContext(CartContext);
  const [amount, setAmount] = useState<number>(0);
  const updateData = () => {
    let dataCart: any = localStorage.getItem("cart");
    if (dataCart) {
      dataCart = JSON.parse(dataCart);
      dataCart.find((e: any) => {
        if (e.id === content.id) {
          setAmount(e.amount);
          return e;
        }
        return false;
      });
    }
  };
  useEffect(() => {
    updateData();
  });
  const changeAmountCart = (method: number) => {
    if (changeAmount) {
      if (method === 0) {
        let newVal = amount - 1;
        if (newVal !== 0) {
          changeAmount(content.id, newVal);
          updateData();
        }

        return;
      }
      let newVal = amount + 1;
      changeAmount(content.id, newVal);
      updateData();
    }
  };
  const removeCartHandl = () => {
    if (removeInCart) {
      removeInCart(content.id);
      updateWrapper();
    }
  };
  return (
    <div className="item-cart-wrapper">
      <div className="close-icon" onClick={removeCartHandl}>
        <img src={closeIcon} alt="" />
      </div>
      <div className="name-wrapper">
        <p>{content.name}</p>
      </div>
      <div className="amount-wrapper">
        <span onClick={() => changeAmountCart(0)}>-</span>
        <input type="text" value={amount} disabled />
        <span onClick={() => changeAmountCart(1)}>+</span>
      </div>
      <div className="price-wrapper">
        {content.discont !== 0 ? (
          <div className="price-discount">
            <div className="discount-wrapper">
              {content.discont} <span>%</span>{" "}
            </div>
            <div className="price-wrapper">
              {(content.price - (content.price * content.discont) / 100) *
                amount}
              <span>₴</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
