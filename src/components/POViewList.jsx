import { useParams } from "react-router";
import useSWR from "swr";
import POcard from "./POViewCard";
export default function ProductOverView() {
  const { product_id } = useParams();
  async function fetchProduct(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch products from API");
    }
    const data = await response.json();
    return data;
  }
  const {
    data: product,
    error,
    isLoading,
  } = useSWR(
    `https://api.escuelajs.co/api/v1/products/${product_id}`,
    fetchProduct
  );

  if (isLoading) return <p className="isLoading">LOADING...</p>;
  if (error) return <p>error</p>;

  return (
    <div className="product-View-list">
      <POcard product={product} />
    </div>
  );
}
