import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
function ProductList() {
  const [products, setProducts] = useState([]);
  async function fetchProduct() {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new console.error("Failed to fetch products from API");
    }
    const data = await response.json();
    setProducts(data);
  }
  useEffect(() => {
    fetchProduct(), [];
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
