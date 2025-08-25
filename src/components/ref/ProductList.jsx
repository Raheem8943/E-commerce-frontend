// import { useState, useEffect } from "react";
// import ProductCard from "./ProductCard";
// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   async function fetchProduct() {
//     try {
//       const response = await fetch("https://fakestoreapi.com/products");
//       if (!response.ok) throw new Error("Failed to fetch products from API");
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }
//   useEffect(() => {
//     fetchProduct(), [];
//   });

//   if (isLoading) return <p className="isLoading">LOADING...</p>;

//   if (error) return;
//   <p>{error}</p>;
//   return (
//     <div className="product-list">
//       {products.map((product) => {
//         return <ProductCard key={product.id} product={product} />;
//       })}
//     </div>
//   );
// }

// export default ProductList;
