import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import productImage from "../MainScreen/CatalogWrapper/img1.jpg";
import "./product.sass";
import {
  getCategoryProduct,
  getProductData,
} from "../../api/products/products";
import { CartContext } from "../../context/CartContext";
interface IDataWrap {
  id: string;
}
export const ProductComponent: React.FC = () => {
  const [dataProduct, setDataProduct] = useState<any>();
  const [category, setCategory] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const data: IDataWrap = useParams();
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    getProductData(parseInt(data.id))
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          setDataProduct(res.data);
        }
      })
      .catch((err) => console.log(err));
    return;
  }, [data]);
  useEffect(() => {
    if (dataProduct !== undefined) {
      getCategoryProduct(dataProduct.category)
        .then((res) => {
          setCategory(res.data.name);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [category, dataProduct]);
  const addToCartHandler = () => {
    if (addToCart) {
      addToCart(dataProduct.id, size);
    }
  };

  return (
    <div className="products-wrapper">
      {dataProduct !== undefined ? (
        <>
          <div className="wrapper-flex-product">
            <div className="image-wrappper">
              <img src={productImage} alt="" />
            </div>
            <div className="content-wrapper">
              <div className="name-product">
                <h1 className="h1">{dataProduct.name}</h1>
              </div>
              <div className="class-info">
                <p>Артикуль: {dataProduct.id}</p>
                <p>Категория: {category}</p>
                <p>Бренд: {"staff"}</p>
              </div>
              <div className="size-wrapper"></div>
              <div className="price-wrappper">
                {dataProduct.discount !== 0 ? (
                  <div className="discount-wrapper">
                    <div className="price-wrapp">
                      <p>
                        {dataProduct.price -
                          (dataProduct.price * dataProduct.discont) / 100}
                        ₴
                      </p>
                    </div>
                    <div className="discount-wrapper-val">
                      <p>{dataProduct.price}₴</p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="size-wrapper-dast">
                <div className="top-line">
                  <h4 className="h1">Розміри</h4>
                </div>
                <div className="size-wrapper">
                  <span
                    className={`check-sise ${
                      size === "xs" ? "active-size" : ""
                    }`}
                    onClick={() => setSize("xs")}
                  >
                    XS
                  </span>
                  <span
                    className={`check-sise ${
                      size === "s" ? "active-size" : ""
                    }`}
                    onClick={() => setSize("s")}
                  >
                    S
                  </span>
                  <span
                    className={`check-sise ${
                      size === "m" ? "active-size" : ""
                    }`}
                    onClick={() => setSize("m")}
                  >
                    M
                  </span>
                  <span
                    className={`check-sise ${
                      size === "l" ? "active-size" : ""
                    }`}
                    onClick={() => setSize("l")}
                  >
                    L
                  </span>
                  <span
                    className={`check-sise ${
                      size === "xl" ? "active-size" : ""
                    }`}
                    onClick={() => setSize("xl")}
                  >
                    XL
                  </span>
                  <span
                    className={`check-sise ${
                      size === "xxl" ? "active-size" : ""
                    }`}
                    onClick={() => setSize("xxl")}
                  >
                    XXL
                  </span>
                  <span
                    className={`check-sise ${
                      size === "xxxl" ? "active-size" : ""
                    }`}
                    onClick={() => setSize("xxxl")}
                  >
                    XXXL
                  </span>
                </div>
              </div>
              <div className="btn-wrapper">
                <button
                  type="button"
                  className="btn-add-to-cart"
                  onClick={addToCartHandler}
                >
                  Добавить в карзину
                </button>
                <button type="button" className="btn-add-order">
                  Купить в один клик
                </button>
              </div>
            </div>
          </div>
          <div className="description-wrapper">
            <div className="top-line">
              <h1 className="h1">Описание</h1>
            </div>
            <div className="desc-content">
              <p>
                Далеко-далеко за словесными горами в стране гласных и согласных
                живут рыбные тексты. Переписывается прямо всемогущая собрал,
                имени проектах текстами это жизни ipsum даль последний
                парадигматическая не толку семь агентство безопасную путь злых
                выйти, возвращайся о назад продолжил, океана живет силуэт. Букв,
                щеке дорогу буквенных грамматики переулка запятых страна ipsum
                правилами однажды предупредила своих знаках рекламных продолжил
                там решила собрал океана грустный толку осталось своего свой
                языком имеет. Бросил, журчит коварных коварный lorem эта о что
                приставка гор единственное буквоград свой деревни безопасную,
                страну своих которое последний!
              </p>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
