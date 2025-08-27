import useSWR from "swr";
import CategoryCard from "./CategoryCard";
import "./Category.css";
export default function Categories() {
  async function fetchCategory(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch products from API");
    }
    const data = await response.json();
    return data;
  }
  const {
    data: categories,
    error,
    isLoading,
  } = useSWR("https://api.escuelajs.co/api/v1/categories", fetchCategory);


  if (isLoading) return <p className="isLoading">LOADING...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="C_list">
    <h1>Categories</h1>
    <div className="category_list">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
      
    </div>
    </div>
  );
}
