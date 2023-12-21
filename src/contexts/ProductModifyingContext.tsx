import { createContext, useState } from "react";
import Product from "../interfaces/product";

export const ProductModifyingContext = createContext({});

export const ProductModifyingProvider = ({ children }: any) => {

  const [productModifying, setProductModifying] = useState<Product>();

  const assignModifyingProduct = (product: Product) => {
    setProductModifying(product);
  }

  return (
    <ProductModifyingContext.Provider value={{ productModifying, assignModifyingProduct }}>
      {children}
    </ProductModifyingContext.Provider>
  );
}