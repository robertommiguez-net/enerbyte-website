/**
 * TiendaSection — Componente autocontenido de tienda de domótica.
 *
 * Uso:
 *   import { TiendaSection } from "@/components/TiendaSection";
 *   <TiendaSection />
 *
 * Requisitos:
 *   - React 18+
 *   - TailwindCSS
 *   - lucide-react  (npm i lucide-react)
 *
 * Estilos:
 *   Usa las clases utilitarias de Tailwind + tokens semánticos (bg-background,
 *   text-foreground, border-border, bg-primary, etc.). Si tu proyecto no tiene
 *   estos tokens, agregá al final de tu CSS global el bloque que está al pie
 *   de este archivo (ver comentario "TOKENS OPCIONALES").
 *
 * Este componente NO depende de router ni de estado global: se puede pegar
 * directamente debajo del Hero del Home.
 */

import { useMemo, useState } from "react";
import {
  Lightbulb, Camera, Cpu, Thermometer, Radio, Plug, Zap, ShieldCheck,
  Home, ShoppingCart, ArrowRight, Search, Star, Truck, Wifi,
} from "lucide-react";

type Product = {
  id: string;
  name: string;
  tag: string;
  price: number;
  category: "Iluminación" | "Seguridad" | "Sensores" | "Control" | "Climatización" | "Energía";
  icon: typeof Lightbulb;
  badge?: string;
};

const PRODUCTS: Product[] = [
  { id: "p1", name: "Lámpara LED RGBW Wi-Fi", tag: "9W · E27 · 16M colores", price: 8990, category: "Iluminación", icon: Lightbulb, badge: "Más vendido" },
  { id: "p2", name: "Cámara IP 2K con visión nocturna", tag: "Interior · Audio bidireccional", price: 34990, category: "Seguridad", icon: Camera },
  { id: "p3", name: "Hub Zigbee 3.0 + Matter", tag: "Compatible Home Assistant", price: 42500, category: "Control", icon: Cpu, badge: "Nuevo" },
  { id: "p4", name: "Termostato inteligente", tag: "Split · IR universal", price: 27900, category: "Climatización", icon: Thermometer },
  { id: "p5", name: "Sensor de presencia mmWave", tag: "Zigbee · 5.8 GHz", price: 18500, category: "Sensores", icon: Radio },
  { id: "p6", name: "Relé Wi-Fi 2 canales", tag: "10A · Modo pulso", price: 9900, category: "Control", icon: Plug },
  { id: "p7", name: "Sensor de apertura Zigbee", tag: "Puertas y ventanas · Pila 1 año", price: 6500, category: "Sensores", icon: ShieldCheck },
  { id: "p8", name: "Enchufe con medición de consumo", tag: "16A · Estadísticas en la app", price: 11900, category: "Energía", icon: Zap, badge: "Ahorro" },
];

const CATEGORIES = ["Todo", "Iluminación", "Seguridad", "Sensores", "Control", "Climatización", "Energía"] as const;

function formatPrice(n: number) {
  return new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(n);
}

export type TiendaSectionProps = {
  /** Muestra el header sticky con logo y carrito. Default: true */
  showHeader?: boolean;
  /** Muestra el hero superior. Default: true */
  showHero?: boolean;
  /** Muestra el footer. Default: true */
  showFooter?: boolean;
  /** Título del bloque de productos. */
  heading?: string;
  /** Subtítulo del bloque de productos. */
  subheading?: string;
  /** Callback opcional al agregar al carrito. */
  onAddToCart?: (product: Product, quantity: number) => void;
};

export function TiendaSection({
  showHeader = true,
  showHero = true,
  showFooter = true,
  heading = "Nuestra selección",
  subheading = "Cada dispositivo probado en instalaciones reales.",
  onAddToCart,
}: TiendaSectionProps = {}) {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("Todo");
  const [q, setQ] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});

  const filtered = useMemo(
    () =>
      PRODUCTS.filter(
        (p) =>
          (cat === "Todo" || p.category === cat) &&
          (q.trim() === "" ||
            p.name.toLowerCase().includes(q.toLowerCase()) ||
            p.tag.toLowerCase().includes(q.toLowerCase())),
      ),
    [cat, q],
  );

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const addToCart = (p: Product) => {
    setCart((c) => {
      const next = { ...c, [p.id]: (c[p.id] ?? 0) + 1 };
      onAddToCart?.(p, next[p.id]);
      return next;
    });
  };

  return (
    <div className="bg-background text-foreground font-sans">
      {showHeader && (
        <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary/70 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)]">
                <Home className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Enerbyte<span className="text-primary">.</span>Tienda
              </span>
            </a>
            <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
              <a href="#tienda" className="transition hover:text-foreground">Productos</a>
              <a href="#categorias" className="transition hover:text-foreground">Categorías</a>
              <a href="#contacto" className="transition hover:text-foreground">Contacto</a>
            </nav>
            <button className="relative flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition hover:border-primary/60">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Carrito</span>
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1.5 text-xs font-bold text-primary-foreground">
                {cartCount}
              </span>
            </button>
          </div>
        </header>
      )}

      {showHero && (
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card">
          <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(hsl(var(--primary)/0.15)_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <Wifi className="h-3.5 w-3.5" /> Nueva colección · Otoño 2026
              </span>
              <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
                Dispositivos que{" "}
                <span className="bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                  piensan por vos
                </span>
                .
              </h1>
              <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
                Sensores, cámaras, relés y hubs seleccionados por nuestro equipo. Compatibles con Home Assistant, Google Home y Alexa.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#tienda" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)] transition hover:brightness-110">
                  Ver productos <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contacto" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold transition hover:border-primary/50">
                  Asesoramiento gratuito
                </a>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-3xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {[Lightbulb, Camera, Cpu, Thermometer].map((Icon, i) => (
                  <div
                    key={i}
                    className="group rounded-2xl border border-border bg-card p-6 shadow-xl transition hover:-translate-y-1 hover:border-primary/50"
                    style={{ transform: `translateY(${(i % 2) * 24}px)` }}
                  >
                    <Icon className="h-10 w-10 text-primary transition group-hover:scale-110" />
                    <div className="mt-6 h-1.5 w-2/3 rounded-full bg-primary/30" />
                    <div className="mt-2 h-1.5 w-1/2 rounded-full bg-muted" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Feature strip */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-6 text-sm sm:px-6 md:grid-cols-4">
          {[
            { i: Truck, t: "Envío a todo el país", s: "48–72h hábiles" },
            { i: ShieldCheck, t: "Compra protegida", s: "Garantía Enerbyte" },
            { i: Cpu, t: "Curado por expertos", s: "Compatible HA / Matter" },
            { i: Zap, t: "Ahorro energético", s: "Consumo optimizado" },
          ].map((f) => (
            <div key={f.t} className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <f.i className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-foreground">{f.t}</div>
                <div className="text-xs text-muted-foreground">{f.s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tienda */}
      <section id="tienda" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 id="categorias" className="text-3xl font-bold sm:text-4xl">{heading}</h2>
            <p className="mt-2 text-muted-foreground">{subheading}</p>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar producto…"
              className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                cat === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => {
            const Icon = p.icon;
            const qty = cart[p.id] ?? 0;
            return (
              <article
                key={p.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xl transition hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="relative flex aspect-square items-center justify-center overflow-hidden border-b border-border bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.25),transparent_70%)]">
                  <Icon className="h-20 w-20 text-primary transition group-hover:scale-110" strokeWidth={1.4} />
                  {p.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                      {p.badge}
                    </span>
                  )}
                  <span className="absolute right-3 top-3 rounded-full border border-border bg-background/70 px-2 py-1 text-[10px] font-medium text-muted-foreground backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-1 text-xs text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                    <span className="ml-1 text-muted-foreground">(24)</span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold leading-tight">{p.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.tag}</p>
                  <div className="mt-4 flex items-end justify-between gap-2">
                    <div>
                      <div className="text-xl font-bold">{formatPrice(p.price)}</div>
                      <div className="text-[11px] text-muted-foreground">o 3× sin interés</div>
                    </div>
                    <button
                      onClick={() => addToCart(p)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition hover:brightness-110"
                      aria-label={`Agregar ${p.name} al carrito`}
                    >
                      <ShoppingCart className="h-3.5 w-3.5" />
                      {qty > 0 ? qty : "Agregar"}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border py-16 text-center text-muted-foreground">
            No encontramos productos con esos criterios.
          </div>
        )}
      </section>

      {/* CTA */}
      <section id="contacto" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-10 shadow-xl md:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h3 className="text-3xl font-bold sm:text-4xl">¿Armamos tu ecosistema?</h3>
            <p className="mt-3 text-muted-foreground">
              Contanos qué querés automatizar y te enviamos una propuesta a medida con los dispositivos ideales.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:hola@enerbyte.com.ar" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
                Solicitar asesoramiento <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#tienda" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold transition hover:border-primary/50">
                Seguir explorando
              </a>
            </div>
          </div>
        </div>
      </section>

      {showFooter && (
        <footer className="border-t border-border/60 bg-card/40">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
            <div className="flex items-center gap-2">
              <div className="grid h-7 w-7 place-items-center rounded-md bg-primary">
                <Home className="h-4 w-4 text-primary-foreground" />
              </div>
              <span>© {new Date().getFullYear()} Enerbyte — Automatización inteligente</span>
            </div>
            <div className="flex gap-5">
              <a href="#" className="hover:text-foreground">Envíos</a>
              <a href="#" className="hover:text-foreground">Garantía</a>
              <a href="#" className="hover:text-foreground">Términos</a>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default TiendaSection;

/* ─────────────────────────────────────────────────────────────
   TOKENS OPCIONALES — Pegá esto en tu globals.css si tu proyecto
   no define los tokens de shadcn/ui. Formato HSL.

   :root {
     --background: 222 47% 11%;
     --foreground: 210 40% 98%;
     --card: 222 40% 16%;
     --card-foreground: 210 40% 98%;
     --muted: 217 33% 22%;
     --muted-foreground: 215 20% 70%;
     --border: 217 33% 25%;
     --primary: 199 89% 60%;
     --primary-foreground: 222 47% 11%;
   }

   @layer base {
     * { border-color: hsl(var(--border)); }
     body { background: hsl(var(--background)); color: hsl(var(--foreground)); }
   }
   ───────────────────────────────────────────────────────────── */
