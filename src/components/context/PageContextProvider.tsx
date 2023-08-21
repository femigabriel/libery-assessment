"use client";

import { Product } from "../../../../tezzasolutions_assessment/interfaces";
import React, { ReactNode, useState } from "react";
import { PageContext } from "./PageContext";

interface IProps {
  children: ReactNode;
}

const PageContexttProvider = ({ children }: IProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const addProduct = (product: Product) => {
    product.id = products.length;
    setProducts([...products, product]);
  };
  return (
    <PageContext.Provider
      value={{
        products,
        addProduct,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageContexttProvider;
