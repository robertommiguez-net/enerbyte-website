const Constructoras = () => {
  const packs = [
    {
      nombre: "Pack Esencial",
      detalle: "Para edificios Smart Ready con bajo costo inicial.",
      items: [
        "Cerradura inteligente",
        "Control de termotanque",
        "Iluminación básica",
        "App móvil",
      ],
    },
    {
      nombre: "Pack Confort",
      detalle: "La opción ideal para departamentos modernos.",
      destacado: true,
      items: [
        "Cortinas motorizadas",
        "Escenas automáticas",
        "Sensores inteligentes",
        "Control por voz",
      ],
    },
    {
      nombre: "Pack Premium",
      detalle: "Automatización avanzada para desarrollos de categoría.",
      items: [
        "Climatización inteligente",
        "Cámaras y alarmas",
        "Sensores de gas/humo/agua",
        "Medición de consumo",
      ],
    },
    {
      nombre: "Pack Signature",
      detalle: "Integración total para proyectos de lujo.",
      items: [
        "Ascensor integrado",
        "Acceso vehicular",
        "Audio por ambientes",
        "Gestión energética avanzada",
      ],
    },
  ];

  const proceso = [
    "Reunión inicial",
    "Diseño técnico",
    "Instalación en obra",
    "Configuración y pruebas",
    "Entrega y soporte",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-950 to-cyan-900/20" />

        <div className="relative max-w-7xl mx-auto text-center">
          <span className="text-blue-400 font-semibold uppercase tracking-[0.3em]">
            Enerbyte para constructoras
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            Automatización para edificios y departamentos
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
            Integramos soluciones de domótica desde la etapa de proyecto,
            aumentando el valor de cada unidad y diferenciando tu desarrollo
            inmobiliario desde la entrega.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/543442405219"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700 transition"
            >
              Solicitar reunión
            </a>

            <a
              href="/"
              className="rounded-xl border border-slate-600 px-8 py-4 font-bold text-white hover:bg-white hover:text-slate-950 transition"
            >
              Volver al inicio
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-slate-900/70">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            "Mayor valor de venta por unidad",
            "Diferenciación frente a otros desarrollos",
            "Instalación más económica durante la obra",
            "Departamentos preparados para el futuro",
            "Mejor experiencia para el comprador",
            "Nuevas oportunidades de upgrades",
          ].map((beneficio) => (
            <div
              key={beneficio}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
            >
              <div className="mb-4 text-3xl">✓</div>
              <h3 className="text-xl font-bold">{beneficio}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-400 font-semibold uppercase tracking-widest">
              Packs de automatización
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Soluciones escalables para cada proyecto
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {packs.map((pack) => (
              <div
                key={pack.nombre}
                className={`rounded-3xl p-6 border transition hover:-translate-y-2 ${
                  pack.destacado
                    ? "bg-blue-600 border-blue-400 shadow-2xl shadow-blue-900/40"
                    : "bg-slate-900 border-slate-800"
                }`}
              >
                {pack.destacado && (
                  <span className="inline-block mb-4 rounded-full bg-white px-3 py-1 text-sm font-bold text-blue-700">
                    Más elegido
                  </span>
                )}

                <h3 className="text-2xl font-bold mb-3">{pack.nombre}</h3>

                <p
                  className={`mb-6 ${
                    pack.destacado ? "text-blue-50" : "text-slate-300"
                  }`}
                >
                  {pack.detalle}
                </p>

                <ul className="space-y-3 text-sm">
                  {pack.items.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-400 font-semibold uppercase tracking-widest">
              Cómo trabajamos
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              De la idea a la entrega final
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {proceso.map((paso, index) => (
              <div
                key={paso}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6 text-center"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold">
                  {index + 1}
                </div>

                <h3 className="font-bold text-lg">{paso}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Tenés un edificio o desarrollo en proyecto?
          </h2>

          <p className="text-blue-50 text-lg max-w-3xl mx-auto mb-8">
            Enerbyte puede acompañarte desde el diseño técnico hasta la
            instalación, configuración y entrega final de cada departamento.
          </p>

          <a
            href="https://wa.me/543442405219"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-700 hover:bg-slate-100 transition"
          >
            Quiero asesoramiento
          </a>
        </div>
      </section>
    </main>
  );
};

export default Constructoras;