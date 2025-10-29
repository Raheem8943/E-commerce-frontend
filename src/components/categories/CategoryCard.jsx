import { Link } from "react-router";
import "./Category.css";
export default function CategoryCard({ category }) {
  console.log("category:", category);

  return (
    <Link to={`/${category.slug}`}>
      <div className="c_card">
        <div className="c_image">
          <img src={category.image} alt={category.name} />
        </div>
        <br />
        <div className="name_div">
          <h4>{category.name}</h4>
        </div>
      </div>
    </Link>
  );
}
