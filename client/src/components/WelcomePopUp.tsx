import { useEffect, useState } from "react";
import { X, Smartphone, PlugZap } from "lucide-react";

const STORAGE_KEY = "enerbyte-popup";

export default function WelcomePopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      const nextDate = Number(saved);

      if (Date.now() < nextDate) return;
    }

    const onScroll = () => {
      const percent =
        window.scrollY /
        (document.body.scrollHeight - window.innerHeight);

      if (percent > 0.30) {
        setShow(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => {
    const sevenDays =
      Date.now() + 7 * 24 * 60 * 60 * 1000;

    localStorage.setItem(STORAGE_KEY, sevenDays.toString());

    setShow(false);
  };

  if (!show) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300" />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-5">

        <div className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-cyan-500/30 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">

          <button
            onClick={close}
            className="absolute right-5 top-5 text-white/70 hover:text-white"
          >
            <X size={24}/>
          </button>

          <div className="p-10">

            <div className="flex items-center gap-3 text-cyan-400 mb-5">

              <PlugZap size={40}/>

              <span className="font-bold text-xl">
                EMPEZÁ TU HOGAR INTELIGENTE
              </span>

            </div>

            <h2 className="text-4xl font-bold text-white leading-tight mb-5">

              Automatizá tu casa
              <br />
              desde hoy.

            </h2>

            <p className="text-white/80 text-lg leading-8">

              Controlá desde tu celular:

            </p>

            <ul className="mt-5 space-y-3 text-white">

              <li>💡 Luces</li>

              <li>☕ Cafetera</li>

              <li>🌬️ Ventiladores</li>

              <li>🚿 Termotanque</li>

              <li>📺 TV</li>

              <li>🔌 Cualquier equipo eléctrico</li>

            </ul>

            <div className="mt-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 p-4 flex gap-4">

              <Smartphone
                className="text-cyan-400"
                size={34}
              />

              <div>

                <strong className="text-white">

                  Compatible con Google Home y Alexa

                </strong>

                <p className="text-white/70 text-sm">

                  Instalación simple y configuración incluida.

                </p>

              </div>

            </div>

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/543442405219?text=Hola%20Enerbyte,%20quiero%20comenzar%20mi%20hogar%20inteligente.",
                  "_blank"
                )
              }
              className="mt-8 w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-4 text-lg transition"
            >

              QUIERO EMPEZAR

            </button>

            <p className="text-center text-white/60 text-sm mt-5">

              ¿No sabés cuál elegir?
              <br />

              Te asesoramos sin cargo.

            </p>

          </div>

        </div>

      </div>

    </>
  );
}