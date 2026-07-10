import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const WHATSAPP = "https://wa.me/543442405219";

export default function Empresas() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);

  const openWhatsapp = (message: string) => {
    window.open(`${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <header className="fixed top-0 w-full z-[9999] bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Enerbyte" className="h-8 w-8" />
            <span className="text-xl font-bold">Enerbyte</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="/"
              className="text-sm text-muted-foreground hover:text-accent transition"
            >
              Inicio
            </a>

            <a
              href="/#nosotros"
              className="text-sm text-muted-foreground hover:text-accent transition"
            >
              Nosotros
            </a>

            <a
              href="/#soluciones"
              className="text-sm text-muted-foreground hover:text-accent transition"
            >
              Soluciones
            </a>

            <div
              className="relative"
              onMouseEnter={() => setSectorsOpen(true)}
              onMouseLeave={() => setSectorsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setSectorsOpen(!sectorsOpen)}
                className="flex items-center gap-1 text-sm text-accent transition"
              >
                Sectores
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    sectorsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {sectorsOpen && (
                <div className="absolute left-0 top-full pt-3">
                  <div className="min-w-48 rounded-xl border border-border bg-background/95 p-2 shadow-2xl backdrop-blur-md">
                    <a
                      href="/constructoras"
                      className="block rounded-lg px-4 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-accent"
                    >
                      Constructoras
                    </a>

                    <a
                      href="/empresas"
                      className="block rounded-lg bg-secondary px-4 py-3 text-sm text-accent"
                    >
                      Empresas
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/#como-trabajamos"
              className="text-sm text-muted-foreground hover:text-accent transition"
            >
              Cómo trabajamos
            </a>

            <a
              href="/#contacto"
              className="text-sm text-muted-foreground hover:text-accent transition"
            >
              Contacto
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              className="hidden md:flex"
              onClick={() =>
                openWhatsapp(
                  "Hola, quiero consultar por soluciones para mi empresa"
                )
              }
            >
              Solicitar asesoramiento
            </Button>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="container space-y-4 border-t border-border py-5 md:hidden">
            <a href="/" className="block text-sm text-muted-foreground">
              Inicio
            </a>

            <a
              href="/#nosotros"
              className="block text-sm text-muted-foreground"
            >
              Nosotros
            </a>

            <a
              href="/#soluciones"
              className="block text-sm text-muted-foreground"
            >
              Soluciones
            </a>

            <div>
              <button
                className="flex w-full items-center justify-between text-sm text-accent"
                onClick={() => setSectorsOpen(!sectorsOpen)}
              >
                Sectores
                <span>{sectorsOpen ? "−" : "+"}</span>
              </button>

              {sectorsOpen && (
                <div className="mt-3 space-y-3 border-l border-border pl-4">
                  <a
                    href="/constructoras"
                    className="block text-sm text-muted-foreground"
                  >
                    Constructoras
                  </a>

                  <a href="/empresas" className="block text-sm text-accent">
                    Empresas
                  </a>
                </div>
              )}
            </div>

            <a
              href="/#como-trabajamos"
              className="block text-sm text-muted-foreground"
            >
              Cómo trabajamos
            </a>

            <a
              href="/#contacto"
              className="block text-sm text-muted-foreground"
            >
              Contacto
            </a>
          </nav>
        )}
      </header>

      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-45"
            style={{
              backgroundImage: "url('/images/automation-hero.png')",
            }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,#070b1f_5%,rgba(7,11,31,.93)_42%,rgba(7,11,31,.45)_100%)]" />

          <div className="absolute -left-40 top-36 h-96 w-96 rounded-full bg-primary/25 blur-[110px]" />

          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-[100px]" />

          <div className="container relative z-10 py-20">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                <Sparkles className="h-4 w-4" />
                Una sola empresa. Todas tus soluciones tecnológicas.
              </div>

              <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-7xl">
                Tecnología integral para que tu empresa
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  funcione sin interrupciones.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
                Soporte informático, redes, seguridad, respaldo y automatización
                con atención personalizada en Concepción del Uruguay y la
                región.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="h-14 rounded-xl px-7 text-base"
                  onClick={() =>
                    openWhatsapp(
                      "Hola, quiero solicitar un diagnóstico tecnológico para mi empresa"
                    )
                  }
                >
                  Solicitar diagnóstico
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-xl border-white/25 bg-white/5 px-7 text-base text-white hover:bg-white/10"
                  onClick={() =>
                    document
                      .getElementById("beneficios")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Conocer la propuesta
                </Button>
              </div>

              <div className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
                {[
                  "Más de 15 años de experiencia",
                  "Atención remota y presencial",
                  "Soluciones a medida",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 backdrop-blur"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="beneficios"
          className="border-t border-border bg-secondary/30 py-20"
        >
          <div className="container text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Tu tecnología, bajo una sola atención.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
              Próximamente vamos a ampliar esta sección con planes mensuales,
              servicios, beneficios y casos de uso para empresas.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}