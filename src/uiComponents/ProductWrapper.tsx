import React from "react";
import { IDataProduct } from "../components/MainScreen/type";
import img from "../components/MainScreen/CatalogWrapper/img1.jpg";
import { Link } from "react-router-dom";

type TProps = {
  content: IDataProduct;
};

export const ProductWrapper: React.FC<TProps> = ({ content }) => {
  console.log(content);

  return (
    <div className="product-wrapaper">
      <Link to={`/product/${content.id}`}>
        <div className="image-wrapper">
          <img src={img} alt="" />
        </div>
        <div className="name-wrapper">
          <p>{content.name}</p>
        </div>
        <div className="price-wrapper">
          {content.discont === 0 ? (
            <div className="price-defult">
              <p className="price-wrap">{content.price} ₴</p>
            </div>
          ) : (
            <div className="discount-wrapper">
              <p className="defult-price">{content.price} ₴</p>
              <p className="discount-wrapper">
                {content.price - (content.price * content.discont) / 100}₴
              </p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};
