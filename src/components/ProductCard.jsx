import "./ProductCard.css";
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>
        price: $ <b>{product.price}</b>
      </p>
    </div>
  );
}
