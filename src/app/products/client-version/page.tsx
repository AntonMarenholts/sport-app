"use client";

import { Product } from "@/types/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductsClientVersion() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        
        const data = await res.json();
        setProducts(data);

      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products Client-version</h1>
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
}