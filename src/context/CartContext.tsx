import React, { useEffect, useState } from "react";
import { PopUpCart } from "../uiComponents/PopUpCart";

export interface ICart {
  addToCart: (id: number, size: string) => void;
  removeInCart: (id: number) => void;
  changeAmount: (id: number, val: number) => void;
  cartLengh: number;
  changePopStatus: () => void;
}
export type ICartIn = {
  id: number;
  amount: number;
};
export const CartContext = React.createContext<Partial<ICart>>({});
export const CartCreateContext: React.FC = ({ children }) => {
  const [length, setLength] = useState<number>(0);
  const [popUpCart, setPopUpCart] = useState<boolean>(false);
  useEffect(() => {
    let dataCart: any = localStorage.getItem("cart");
    if (dataCart) {
      dataCart = JSON.parse(dataCart);
      setLength(dataCart.length);
    }
  }, []);
  const cartContext: ICart = {
    removeInCart: (id) => {
      let dataCart: any = localStorage.getItem("cart");
      dataCart = JSON.parse(dataCart);
      let newCart = dataCart.filter((e: any) => e.id !== id);
      localStorage.setItem("cart", JSON.stringify(newCart));
    },
    changeAmount: (id, val) => {
      let dataCart: any = localStorage.getItem("cart");
      dataCart = JSON.parse(dataCart);
      let newCart: any = dataCart.map((e: any) => {
        if (e.id === id) {
          e.amount = val;
          return e;
        }
        return e;
      });
      localStorage.setItem("cart", JSON.stringify(newCart));
    },
    addToCart: (id, size) => {
      let dataCart: any = localStorage.getItem("cart");
      if (dataCart === null) {
        const cart: any = [
          {
            id: id,
            amount: 1,
            size: size,
          },
        ];
        setLength(1);
        localStorage.setItem("cart", JSON.stringify(cart));
        return;
      }
      let data: Array<ICartIn> | any = JSON.parse(dataCart);

      let findProd = data.find((e: any) => {
        if (e.id === id) {
          return true;
        }
        return false;
      });
      if (findProd) {
        let newCart = data.map((e: any) => {
          if (e.id === id) {
            e.amount = e.amount + 1;
            return e;
          }
          return e;
        });
        localStorage.clear();
        setLength(data.length);
        localStorage.setItem("cart", JSON.stringify(newCart));
      } else {
        data.push({ id: id, amount: 1 });
        setLength(data.length);
        localStorage.clear();
        localStorage.setItem("cart", JSON.stringify(data));
      }
    },
    cartLengh: length,
    changePopStatus: () => {
      if (popUpCart) {
        setPopUpCart(false);
        return;
      }
      setPopUpCart(true);
    },
  };
  return (
    <CartContext.Provider value={cartContext}>
      {children}
      {popUpCart ? <PopUpCart /> : ""}
    </CartContext.Provider>
  );
};
