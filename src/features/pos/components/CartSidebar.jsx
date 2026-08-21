export function CartSidebar() {
  return (
    <aside className="w-[360px] h-full border-l bg-card p-4 flex flex-col justify-between shrink-0">
      <div>
        <h2 className="text-lg font-bold">Pedido</h2>
        <p className="text-xs text-muted-foreground">0 ítems agregados</p>
      </div>
      <div className="border-t pt-4">
        <div className="flex justify-between font-bold text-lg mb-4">
          <span>Total:</span>
          <span>$0</span>
        </div>
        <button className="w-full h-11 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors">
          COBRAR
        </button>
      </div>
    </aside>
  );
}
