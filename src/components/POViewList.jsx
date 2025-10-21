import { useState } from "react";
import { useParams } from "react-router";
import useSWR from "swr";
import "./POViewList.css";
import "./ProductCard.css";
import ProductCard from "./ProductCard";

export default function POViewList() {
  ``;
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
  const images =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : ["https://placehold.co/800x600?text=No+Image"];
  console.log("safs", product.category);
  return (
    <div className="po_container">
      <div className="product-View-list">
        <div className="first_div">
          <ImageGallery images={images} title={product.title} />
        </div>
        <div className="second-div">
          <h2 className="product-title">{product.title}</h2>
          <p className="Pline-clamp">{product.description}</p>
          <br />
          <p className="price-tag">price: $ {product.price}</p>
          <br />
          <br />
          <div className="quantity-selector">
            <p className="quantity-label">Quantity</p>
            <div className="quantity-controls">
              <button
                className="quantity-btn"
                onClick={() => setCount((prev) => Math.max(0, prev - 1))}
              >
                -
              </button>
              <span className="quantity-count">{count}</span>
              <button
                className="quantity-btn"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
          </div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
      <RelatedProduct
        categoryId={product.category.id}
        currentProductId={product.id}
      />
    </div>
  );
}
function ImageGallery({ images, title }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="img-container">
      <div className="fist-img">
        <img src={images[selectedIndex]} alt={title} />
      </div>
      <div className="nxt-img">
        {images.map((src, index) => (
          <button
            key={src + index}
            onClick={() => setSelectedIndex(index)}
            className="img-btn"
          >
            <img
              src={src}
              alt={`${title} thumbnail ${index + 1}`}
              className="rem-img"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
function RelatedProduct({ categoryId, currentProductId }) {
  const shouldFetch = Boolean(categoryId);
  async function fetchRelatedProduct(url) {
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
  } = useSWR(
    `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`,
    fetchRelatedProduct
  );
  if (isLoading) return <p className="isLoading">LOADING...</p>;
  if (error) return <p>Error</p>;

  const related = Array.isArray(products)
    ? products.filter((p) => p.id !== currentProductId).slice(0, 4)
    : [];
  if (!shouldFetch) return null;
  return (
    <section>
      <h4>You might also like</h4>
      <div className="product-list">
        {related.map((products) => (
          <ProductCard key={products.id} product={products} />
        ))}
      </div>
    </section>
  );
}
