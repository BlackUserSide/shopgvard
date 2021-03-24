import React, { useEffect, useState } from "react";
import { getProducts } from "../../../api/products/products";
import { ProductWrapper } from "../../../uiComponents/ProductWrapper";
import { IDataProduct } from "../type";

export const CatalogWrapper: React.FC = () => {
  const [dataProduct, setDataProduct] = useState<Array<IDataProduct>>([]);
  useEffect(() => {
    getProducts().then((res) => {
      if (res.data.data) {
        setDataProduct(res.data.data.slice(0, 3));
      }
    });
  }, []);
  console.log(dataProduct);

  return (
    <div className="catalog-wrapper">
      <div className="top-line">
        <h1 className="h1">Каталог</h1>
      </div>
      <div className="catalog-wrapper-flex">
        {dataProduct.map((e, i) => (
          <ProductWrapper content={e} key={i} />
        ))}
      </div>
    </div>
  );
};
