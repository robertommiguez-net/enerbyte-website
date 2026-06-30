const Constructoras = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold uppercase tracking-widest">
              Enerbyte para constructoras
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mt-4">
              Automatización para edificios y departamentos
            </h1>

            <p className="text-slate-300 mt-6 max-w-3xl mx-auto text-lg">
              Integramos soluciones de domótica desde la etapa de proyecto,
              aumentando el valor de cada unidad y diferenciando tu desarrollo inmobiliario.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Pack Esencial",
              "Pack Confort",
              "Pack Premium",
              "Pack Signature",
            ].map((pack) => (
              <div key={pack} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">{pack}</h3>
                <p className="text-slate-300">
                  Solución escalable para integrar tecnología, confort, seguridad y eficiencia energética.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-600 rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Tenés un edificio en desarrollo?
            </h2>

            <p className="mb-6 text-blue-50">
              Enerbyte puede acompañarte desde el diseño técnico hasta la entrega final.
            </p>

            <a
              href="https://wa.me/543442405219"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl"
            >
              Solicitar asesoramiento
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Constructoras;