const Constructoras = () => {
  const packs = [
    {
      nombre: "Esencial",
      precio: "Desde USD 350",
      descripcion: "Para entregar departamentos Smart Ready con bajo costo inicial.",
      items: [
        "Cerradura inteligente",
        "Control de termotanque",
        "Iluminación básica",
        "App móvil",
        "Preparado para futuras ampliaciones",
      ],
    },
    {
      nombre: "Confort",
      precio: "Desde USD 750",
      descripcion: "El pack ideal para edificios modernos de clase media y media alta.",
      destacado: true,
      items: [
        "Cortinas motorizadas",
        "Escenas automáticas",
        "Sensores inteligentes",
        "Control por voz",
        "Medición de consumo eléctrico",
      ],
    },
    {
      nombre: "Premium",
      precio: "Desde USD 1.800",
      descripcion: "Automatización avanzada para desarrollos de categoría.",
      items: [
        "Climatización inteligente",
        "Cámaras y alarmas",
        "Sensores de humo, gas e inundación",
        "Música por ambientes",
        "Gestión energética",
      ],
    },
    {
      nombre: "Signature",
      precio: "A medida",
      descripcion: "Integración total para proyectos de lujo y edificios premium.",
      items: [
        "Ascensor integrado",
        "Acceso vehicular",
        "Audio multisala",
        "Escenas personalizadas",
        "Experiencia inteligente completa",
      ],
    },
  ];

  const beneficios = [
    "Mayor valor de venta por unidad",
    "Diferencial comercial frente a otros desarrollos",
    "Instalación más económica durante la obra",
    "Departamentos preparados para el futuro",
    "Mejor experiencia para el comprador final",
    "Posibilidad de upgrades posteriores",
  ];

  const proceso = [
    {
      titulo: "Reunión inicial",
      texto: "Analizamos el proyecto, el tipo de edificio y el público comprador.",
    },
    {
      titulo: "Diseño técnico",
      texto: "Definimos dispositivos, puntos eléctricos, escenas y posibilidades de expansión.",
    },
    {
      titulo: "Instalación en obra",
      texto: "Trabajamos junto al equipo eléctrico y de obra para integrar la domótica.",
    },
    {
      titulo: "Configuración",
      texto: "Probamos automatizaciones, sensores, escenas, app y control por voz.",
    },
    {
      titulo: "Entrega y soporte",
      texto: "Capacitamos al propietario y ofrecemos asistencia postventa.",
    },
  ];

  const faq = [
    {
      pregunta: "¿Conviene instalar domótica durante la obra?",
      respuesta:
        "Sí. Es más económico, más prolijo y permite dejar cada unidad preparada sin romper paredes después.",
    },
    {
      pregunta: "¿Se puede entregar solo una preinstalación?",
      respuesta:
        "Sí. Podemos dejar el departamento Smart Ready para que el comprador amplíe el sistema luego.",
    },
    {
      pregunta: "¿Funciona si se corta Internet?",
      respuesta:
        "Las funciones básicas pueden seguir operando de forma local según el sistema elegido. Las funciones remotas dependen de Internet.",
    },
    {
      pregunta: "¿Se puede ampliar después?",
      respuesta:
        "Sí. Los packs están pensados para crecer con sensores, cámaras, cortinas, climatización, energía solar y más.",
    },
  ];
  
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-slate-950 to-cyan-900/30" />
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
              Enerbyte para constructoras
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Edificios inteligentes desde el primer plano.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Diseñamos e integramos automatización residencial para edificios,
              departamentos y desarrollos inmobiliarios, aumentando el valor de
              cada unidad y diferenciando tu proyecto desde la entrega.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/543442405219"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-blue-600 px-8 py-4 text-center font-bold text-white transition hover:bg-blue-700"
              >
                Solicitar reunión
              </a>

              <a
                href="/Proyecto_Enerbyte_Pack_Confort_Ejemplo.pdf"
                className="rounded-xl border border-slate-600 px-8 py-4 text-center font-bold text-white transition hover:bg-white hover:text-slate-950"
              >
                Descargar dossier
              </a>
            </div>
          </div>
        </div>
        <div className="relative hidden md:block max-w-md justify-self-end">
  <div className="rounded-3xl border border-blue-400/20 bg-slate-900/70 p-6 shadow-2xl">
    <img
  src="/images/automation-hero2.png"
  alt="Automatización para constructoras"
  className="w-full max-h-[360px] rounded-2xl object-cover object-center opacity-90"
/>

    <div className="mt-6 grid grid-cols-2 gap-4">
      <div className="rounded-xl bg-blue-600/20 p-4">
        <p className="text-sm text-slate-300">Unidades</p>
        <p className="text-2xl font-bold">Smart Ready</p>
      </div>

      <div className="rounded-xl bg-cyan-500/20 p-4">
        <p className="text-sm text-slate-300">Valor agregado</p>
        <p className="text-2xl font-bold">+ Diferenciación</p>
      </div>
    </div>
  </div>
</div>

          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-2xl">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-800 to-slate-950 p-6">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm text-slate-400">Proyecto Smart Building</span>
                <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-300">
                  Online
                </span>
              </div>

              <div className="space-y-4">
                {[
                  "Ingreso inteligente",
                  "Iluminación automatizada",
                  "Cortinas motorizadas",
                  "Climatización eficiente",
                  "Medición de consumo",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl bg-slate-900 p-4"
                  >
                    <span>{item}</span>
                    <span className="text-blue-400">Activo</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-blue-600 p-5">
                <p className="text-sm text-blue-100">Valor agregado estimado</p>
                <p className="mt-2 text-3xl font-bold">+ Diferenciación comercial</p>
              </div>
            </div>
          </div>
      </section>

      <section className="bg-slate-900/70 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="font-semibold uppercase tracking-widest text-blue-400">
              Por qué integrarlo
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              La domótica ya no es lujo: es valor percibido.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {beneficios.map((beneficio) => (
              <div
                key={beneficio}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-blue-500"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold">{beneficio}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="font-semibold uppercase tracking-widest text-blue-400">
              Packs de automatización
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Soluciones escalables para cada desarrollo.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {packs.map((pack) => (
              <div
                key={pack.nombre}
                className={`rounded-3xl border p-6 transition hover:-translate-y-2 ${
                  pack.destacado
                    ? "border-blue-400 bg-blue-600 shadow-2xl shadow-blue-900/40"
                    : "border-slate-800 bg-slate-900"
                }`}
              >
                {pack.destacado && (
                  <span className="mb-4 inline-block rounded-full bg-white px-3 py-1 text-sm font-bold text-blue-700">
                    Más elegido
                  </span>
                )}

                <h3 className="text-2xl font-bold">Pack {pack.nombre}</h3>
                <p className="mt-2 text-2xl font-bold">{pack.precio}</p>
                <p
                  className={`mt-4 ${
                    pack.destacado ? "text-blue-50" : "text-slate-300"
                  }`}
                >
                  {pack.descripcion}
                </p>

                <ul className="mt-6 space-y-3 text-sm">
                  {pack.items.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-slate-400">
            Valores orientativos por unidad. El presupuesto final depende del
            metraje, cantidad de ambientes, marcas elegidas y etapa de obra.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="font-semibold uppercase tracking-widest text-blue-400">
              Proyecto ejemplo
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Pack Confort aplicado a un departamento.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8">
              <h3 className="mb-6 text-2xl font-bold">Ambientes incluidos</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Ingreso",
                  "Living comedor",
                  "Cocina",
                  "Dormitorio",
                  "Baño",
                  "Balcón",
                ].map((ambiente) => (
                  <div key={ambiente} className="rounded-xl bg-slate-900 p-4">
                    {ambiente}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8">
              <h3 className="mb-6 text-2xl font-bold">Funciones principales</h3>
              <ul className="space-y-4 text-slate-300">
                <li>✓ Escena “Llegué”: luces, cortina y climatización.</li>
                <li>✓ Escena “Me voy”: apagado general y modo ahorro.</li>
                <li>✓ Control inteligente del termotanque eléctrico.</li>
                <li>✓ Sensores de movimiento y apertura.</li>
                <li>✓ Control desde app y asistentes de voz.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="font-semibold uppercase tracking-widest text-blue-400">
              Nuestro proceso
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Desde el plano hasta la entrega.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {proceso.map((paso, index) => (
              <div
                key={paso.titulo}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:border-blue-500"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold">{paso.titulo}</h3>
                <p className="mt-3 text-sm text-slate-300">{paso.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <span className="font-semibold uppercase tracking-widest text-blue-400">
              Preguntas frecuentes
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Respuestas para constructoras.
            </h2>
          </div>

          <div className="space-y-4">
            {faq.map((item) => ( <div key={item.pregunta} className="rounded-2xl border border-slate-800 bg-slate-950 p-6"              >
                <h3 className="text-xl font-bold">{item.pregunta}</h3>
                <p className="mt-3 text-slate-300">{item.respuesta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-center md:p-14">
          <h2 className="text-3xl font-bold md:text-5xl">
            Convirtamos tu próximo desarrollo en un edificio inteligente.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-50">
            Enerbyte puede acompañarte desde el diseño técnico hasta la
            instalación, configuración, entrega y soporte postventa.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/543442405219"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-slate-100"
            >
              Hablar por WhatsApp
            </a>

            <a
              href="/"
              className="rounded-xl border border-white/60 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-blue-700"
            >
              Volver al inicio
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Constructoras;