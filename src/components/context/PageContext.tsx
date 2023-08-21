import { Product } from "../../../../tezzasolutions_assessment/interfaces";
import { createContext, useContext } from "react";

interface IProductContext {
  products: Product[];
  addProduct: (product: Product) => void;
}

export const PageContext = createContext<IProductContext>({
  products: [],
  addProduct(product) {},
});

export const useProductContext = () => useContext(PageContext);
