import { createProduct } from "@/app/actions/createProduct";
import { Category } from "@/types";

export default async function page() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const categories = await res.json();

  return (
    <div>
      <form action={createProduct}>
        <input type="text" name="title" placeholder="title" required />
        <input type="number" name="price" placeholder="price" required />
        <input
          type="text"
          name="description"
          placeholder="description"
          required
        />
        <select name="categoryId" required>
          {categories.map((category: Category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <input type="text" name="image" placeholder="image" required />

        <button type="submit">Add products</button>
      </form>
    </div>
  );
}
