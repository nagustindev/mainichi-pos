import { CartSidebar } from "@/features/pos/components/CartSidebar";

export function PosView() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex h-full w-full">
        <main className="flex-1 bg-background p-4">Contenido principal</main>
        <CartSidebar />
      </div>
    </div>
  );
}
