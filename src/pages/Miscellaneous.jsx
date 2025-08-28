import useSWR from "swr";
import ProductCard from "../components/ProductCard";
export default function Miscellaneous() {
  async function fetchProductSWR(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch products from API");
    }
    const data = await response.json();
    return data;
  }
  const {
    data: products,
    error,
    isLoading,
  } = useSWR("https://api.escuelajs.co/api/v1/categories/5/products", fetchProductSWR);

  if (isLoading) return <p className="isLoading">LOADING...</p>;
  if (error) return <p>error</p>;

  return (
    <div className="product-list">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
