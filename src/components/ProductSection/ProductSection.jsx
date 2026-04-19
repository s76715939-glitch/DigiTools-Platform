import { use } from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductSection = ({ productPromise, setCartProducts, cartProducts }) => {
  const products = use(productPromise);
  return (
    <div className="ProductSection">
      {products.map((pr) => (
        <ProductCard
          key={pr.id}
          pr={pr}
          setCartProducts={setCartProducts}
          cartProducts={cartProducts}
        />
      ))}
    </div>
  );
};

export default ProductSection;
