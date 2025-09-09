import { Link } from "react-router";
import "./ProductCard.css";
export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="product-card">
        <h3 className="p_title">{product.title}</h3>
        <div className="img_div">
          <img src={product.images[0]} alt={product.name} />
        </div>
        <div>
          <p className="line-clamp">{product.description}</p>
          <br />
          <p className="price_tag">price: $ {product.price}</p>
      
        </div>
        <div className="cart_button">
        <Link to={"/cart"}>Add to Cart</Link>
       </div>
      </div>
    </Link>
  );
}
