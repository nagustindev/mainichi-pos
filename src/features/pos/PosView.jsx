import { CartSidebar } from "@/features/pos/components/CartSidebar";
import { ProductGrid } from "@/features/pos/components/ProductGrid";

export function PosView() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex h-full w-full">
        <main className="flex-1 bg-background p-4">
          <ProductGrid />
        </main>
        <CartSidebar />
      </div>
    </div>
  );
}
