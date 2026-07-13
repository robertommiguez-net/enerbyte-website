import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "enerbyte-popup";

const trackWhatsappClick = () => {
  if (typeof window !== "undefined" && "gtag" in window) {
    window.gtag("event", "click_whatsapp_popup", {
      event_category: "conversion",
      event_label: "Popup enchufe inteligente",
    });
  }
};

export default function WelcomePopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const savedUntil = Number(localStorage.getItem(STORAGE_KEY));

    if (savedUntil && Date.now() < savedUntil) {
      return;
    }

    const onScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) return;

      const scrollPercent = window.scrollY / scrollableHeight;

      if (scrollPercent >= 0.3) {
        setShow(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

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
    <div
      className="
        fixed
        inset-0
        z-[99999]
        flex
        items-center
        justify-center
        bg-black/75
        p-4
        backdrop-blur-sm
      "
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Promoción Enerbyte"
    >
      <div
        className="
          relative
          inline-flex
          max-h-[70vh]
          max-w-[92vw]
          items-center
          justify-center
          overflow-visible
          animate-in
          fade-in
          zoom-in-95
          duration-300
        "
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          className="
            absolute
            right-3
            top-3
            z-[100000]
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-black/80
            text-white
            shadow-xl
            backdrop-blur-md
            transition
            hover:scale-110
            hover:bg-cyan-500
          "
          aria-label="Cerrar promoción"
        >
          <X size={27} strokeWidth={2.5} />
        </button>

        <a
          href="https://wa.me/543442405219?text=Hola%20Enerbyte,%20quiero%20comenzar%20mi%20hogar%20inteligente."
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          onClick={trackWhatsappClick}
        >
          <img
            src="/images/popup1welcome.webp"
            alt="Empezá tu hogar inteligente con Enerbyte"
            className="
              block
              h-auto
              max-h-[70vh]
              w-auto
              max-w-[92vw]
              rounded-2xl
              object-contain
              shadow-2xl
            "
          />
        </a>
      </div>
    </div>
  );
}