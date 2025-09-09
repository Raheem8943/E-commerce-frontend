import { useState } from "react";
import { useParams } from "react-router";
import useSWR from "swr";

export default function POViewList() {
  console.log("adsf");
  const { product_id } = useParams();

  const [count, setCount] = useState(0);
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
    <div className="po_container">
      <div className="product-View-list">
        <div className="first_div">
          {product.images.map((image,index) => {
            return <img key={index} src={image} alt={product.name} />;
          })}
        </div>
        <div className="second-div">
          <p className="Pline-clamp">{product.description}</p>
          <br />
          <p className="price-tag">price: $ {product.price}</p>

          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
          <p>{count}</p>
        </div>
      </div>
    </div>
  );
}
