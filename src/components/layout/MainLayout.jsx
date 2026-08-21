import { TopAppBar } from "@/components/layout/TopAppBar";

export function MainLayout({ children }) {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-background">
      <TopAppBar />
      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  );
}
