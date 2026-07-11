import { useEffect, useState } from "react";
import { X } from "lucide-react";

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
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) return;

      const percent = window.scrollY / scrollableHeight;

      if (percent > 0.3) {
        setShow(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const close = () => {
    const sevenDays = Date.now() + 7 * 24 * 60 * 60 * 1000;

    localStorage.setItem(STORAGE_KEY, sevenDays.toString());
    setShow(false);
  };

  if (!show) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={close}
      />

      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="
            relative
            w-full
            max-w-5xl
            scale-75
            origin-center
            overflow-visible
            animate-in
            zoom-in-95
            fade-in
            duration-500
            pointer-events-auto
          "
        >
          <button
            type="button"
            onClick={close}
            className="
              absolute
              -top-6
              -right-6
              z-[10000]
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/80
              text-white
              shadow-2xl
              backdrop-blur-md
              transition-all
              duration-300
              hover:scale-110
              hover:bg-cyan-500
            "
            aria-label="Cerrar popup"
          >
            <X size={30} strokeWidth={2.5} />
          </button>

          <a
            href="https://wa.me/543442405219?text=Hola%20Enerbyte,%20quiero%20comenzar%20mi%20hogar%20inteligente."
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src="/images/popup1welcome.webp"
              alt="Empezá tu hogar inteligente con Enerbyte"
              className="
                block
                w-full
                rounded-3xl
                shadow-2xl
                transition-transform
                duration-300
                hover:scale-[1.01]
              "
            />
          </a>
        </div>
      </div>
    </>
  );
}