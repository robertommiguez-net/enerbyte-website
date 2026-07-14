import {
  ArrowRight,
  Building2,
  HardHat,
  House,
  Zap,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/543442405219?text=Hola%20Enerbyte%2C%20quiero%20asesoramiento%20para%20ahorrar%20energ%C3%ADa.";

const solutions = [
  {
    title: "Automatizar mi hogar",
    description:
      "Iluminación, enchufes, climatización, seguridad y rutinas inteligentes.",
    action: "Ver soluciones para el hogar",
    href: "#soluciones",
    icon: House,
  },
  {
    title: "Mejorar mi empresa",
    description:
      "Soporte IT, redes, respaldo, seguridad y automatización para trabajar sin interrupciones.",
    action: "Conocer Enerbyte Empresas",
    href: "/empresas",
    icon: Building2,
  },
  {
    title: "Soluciones para mi obra",
    description:
      "Tecnología y automatización integradas desde la etapa de planificación.",
    action: "Ver soluciones para constructoras",
    href: "/constructoras",
    icon: HardHat,
  },
  {
    title: "Ahorrar energía",
    description:
      "Controlá consumos, programá equipos y evitá gastos innecesarios.",
    action: "Recibir asesoramiento",
    href: WHATSAPP_URL,
    external: true,
    icon: Zap,
  },
];

export default function SolutionPaths() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-secondary/20 py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            Empezá por tu necesidad
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            ¿Qué querés <span className="text-accent">resolver?</span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Elegí el camino que mejor representa tu proyecto y encontrá una
            solución pensada para vos.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <a
                key={solution.title}
                href={solution.href}
                target={solution.external ? "_blank" : undefined}
                rel={solution.external ? "noopener noreferrer" : undefined}
                className="group flex min-h-[310px] flex-col rounded-3xl border border-border bg-background/70 p-7 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary transition duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-bold leading-tight">
                  {solution.title}
                </h3>

                <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                  {solution.description}
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  {solution.action}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-10 text-center text-sm text-muted-foreground">
          ¿No sabés cuál elegir? Te asesoramos sin cargo por WhatsApp.
        </div>
      </div>
    </section>
  );
}
