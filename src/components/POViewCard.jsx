import "./POViewCard.css";
export default function POcard({ product }) {
  return (
    <div className="POcard">
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
