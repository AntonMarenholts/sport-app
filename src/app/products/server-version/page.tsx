import ProductCard from "@/components/ProductCard/ProductCard";
import { Product } from "@/types/types";


export default async function ProductsServerVersion() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    next: { tags: ["products"] },
  });
  if (!res.ok) {
    throw new Error("Products failed to fetch");
  }
  const products = await res.json();
  // console.log(products);
  return (
    <div>
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}