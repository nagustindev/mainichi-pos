import { MOCK_PRODUCTS } from "@/services/mockProducts";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {MOCK_PRODUCTS.map((prod) => (
        <ProductCard
          key={prod.id}
          producto={prod}
        />
      ))}
    </div>
  );
}