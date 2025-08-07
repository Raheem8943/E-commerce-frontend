import "./ProductCard.css";
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <h3>{product.title}</h3>
        <p className="line-clamp">{product.description}</p>
        <p>
          price: $ <b>{product.price}</b>
        </p>
      </div>
    </div>
  );
}
