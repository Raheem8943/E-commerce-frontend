import { Link } from "react-router";
import "./ProductCard.css";
export default function ProductCard({ product }) {
  const { title, name, description, price } = product;
  return (
    <Link to={`/product/${product.id}`}>
      <div className="product-card">
        <h3 className="p_title">{title}</h3>
        <div className="img_div">
          <img src={product.images[0]} alt={name} />
        </div>
        <div>
          <p className="line-clamp">{description}</p>
          <br />
          <p className="price_tag">price: $ {price}</p>
        </div>
        <div className="cart_button">
          <Link to={"/cart"}>Add to Cart</Link>
        </div>
      </div>
    </Link>
  );
}
