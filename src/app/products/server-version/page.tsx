import { Product } from "@/types/types";
import Image from "next/image";

async function getProducts(): Promise<Product[]> {
  
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Fetch products failed");
  }

  return res.json();
}

const ProductsServerVersion = async () => {
  const products = await getProducts();


//     Это я проверял,потому что не все товары показывало
//   console.log('--- SERVER COMPONENT ---');
//   console.log('Number of products received from API:', products.length);
//   console.log('Data:', products);
//   console.log('----------------------');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products Server-version</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="flex items-center gap-4 border p-4 rounded-lg">
            <Image
              src={product.images[0]}
              alt={product.title}
              width={96}
              height={96}
              className="w-24 h-24 object-cover rounded"
            />
            <div>
              <h2 className="text-lg font-semibold">
                {product.title} - ${product.price}
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                {product.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsServerVersion;