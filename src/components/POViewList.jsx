import { useParams } from "react-router";
import useSWR from "swr";
export default function POViewList() {
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

  console.log(product);

  if (isLoading) return <p className="isLoading">LOADING...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="product-View-list">
      <div className="first-div">
        <img src={product.images[0]} alt={product.name} />
      </div>
      <div className="second-div">
        <p className="Pline-clamp">{product.description}</p>
        <br />
        <p className="price-tag">
          price: $ <b>{product.price}</b>
        </p>
      </div>
    </div>
  );
}
