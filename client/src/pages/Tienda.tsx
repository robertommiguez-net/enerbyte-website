import { TiendaSection } from "@/components/TiendaSection";

export default function Tienda() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <TiendaSection showHeader={true} />
    </main>
  );
}