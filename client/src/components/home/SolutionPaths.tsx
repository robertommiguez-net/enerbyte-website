import { ArrowRight, Building2, HardHat, House, Zap } from "lucide-react";

const options = [
  {
    title: "Quiero automatizar mi hogar",
    description:
      "Luces, enchufes, climatización, cámaras y rutinas inteligentes para vivir con más comodidad.",
    icon: House,
    href: "#tienda",
    cta: "Ver soluciones para el hogar",
    accent: "from-blue-500/25 to-cyan-400/5",
  },
  {
    title: "Quiero mejorar mi empresa",
    description:
      "Soporte IT, redes, seguridad, respaldo y automatización con una única atención tecnológica.",
    icon: Building2,
    href: "/empresas",
    cta: "Conocer Enerbyte Empresas",
    accent: "from-cyan-500/25 to-blue-500/5",
  },
  {
    title: "Estoy construyendo",
    description:
      "Integramos tecnología y domótica desde el proyecto para sumar valor a cada unidad y desarrollo.",
    icon: HardHat,
    href: "/constructoras",
    cta: "Ver soluciones para constructoras",
    accent: "from-indigo-500/25 to-blue-500/5",
  },
  {
    title: "Quiero ahorrar energía",
    description:
      "Controlá consumos, programá equipos y evitá gastos innecesarios con automatizaciones simples.",
    icon: Zap,
    href: "https://wa.me/543442405219?text=Hola%20Enerbyte,%20quiero%20asesoramiento%20para%20ahorrar%20energ%C3%ADa%20con%20automatizaci%C3%B3n.",
    cta: "Recibir asesoramiento",
    accent: "from-emerald-500/20 to-cyan-500/5",
    external: true,
  },
];

function trackSelection(title: string) {
  if (typeof window !== "undefined" && "gtag" in window) {
    window.gtag("event", "select_solution_path", {
      event_category: "navigation",
      event_label: title,
    });
  }
}

export default function SolutionPaths() {
  return (
    <section
      id="que-queres-resolver"
      className="relative border-y border-accent/15 bg-[#060b1b] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="mb-4 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            Empezá por tu necesidad
          </span>

          <h2 className="text-3xl font-bold text-white md:text-5xl">
            ¿Qué querés resolver?
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-white/65">
            Elegí el camino que más se parece a tu proyecto. Nosotros te guiamos
            desde la primera consulta hasta la instalación y el soporte.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {options.map((option) => {
            const Icon = option.icon;

            return (
              <a
                key={option.title}
                href={option.href}
                target={option.external ? "_blank" : undefined}
                rel={option.external ? "noopener noreferrer" : undefined}
                onClick={() => trackSelection(option.title)}
                className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-7 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-400/45 hover:bg-white/[0.07]"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${option.accent} opacity-70 transition duration-300 group-hover:opacity-100`}
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-black/25 text-cyan-300 shadow-lg transition duration-300 group-hover:scale-110 group-hover:border-cyan-300/50">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-2xl font-bold leading-tight text-white">
                    {option.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-relaxed text-white/65">
                    {option.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                    {option.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-white/50">
            ¿No sabés cuál elegir? Te asesoramos sin costo y sin compromiso.
          </p>
          <a
            href="https://wa.me/543442405219?text=Hola%20Enerbyte,%20no%20s%C3%A9%20por%20d%C3%B3nde%20empezar%20y%20quiero%20asesoramiento."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90"
          >
            Contanos qué necesitás
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
