import { useActionState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useActionState([]);
  async function fetchProduct() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  }
  useActionState(() => {
    fetchProduct();
  });

  return (
    <div className="product-list">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductList;
