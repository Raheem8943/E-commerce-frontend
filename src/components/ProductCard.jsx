import "./ProductCard.css";
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <br />
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <p className="line-clamp">{product.description}</p>
        <br />
        <p className="price-tag">
          price: $ <b>{product.price}</b>
        </p>
      </div>
    </div>
  );
}
