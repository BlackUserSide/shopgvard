import React, { useState } from "react";

interface ICart {
  addToCart: (id: number) => void;
  // removeInCart: (id: number) => void;
  // changeAmount: (id: number, val: number) => void;
  cartLengh: number;
}
type ICartIn = {
  id: number;
  amount: number;
};
export const CartContext = React.createContext<Partial<ICart>>({});
export const CartCreateContext: React.FC = ({ children }) => {
  const [length, setLength] = useState<number>(0);
  const cartContext: ICart = {
    addToCart: (id) => {
      let dataCart: any = localStorage.getItem("cart");
      if (dataCart === null) {
        const cart: any = [
          {
            id: id,
            amount: 1,
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
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
