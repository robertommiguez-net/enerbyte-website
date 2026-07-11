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

        <div className="relative w-full max-w-5xl overflow-visible">

    <button
  onClick={close}
  className=" absolute -top-8 -right-8 z-[9999] w-14 h-14 rounded-full bg-black/75 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-cyan-500 hover:scale-110
    transition-all
    duration-300
    shadow-2xl
  "
  aria-label="Cerrar"
>
  <X size={30} strokeWidth={2.5} />
</button>

    <a
  href="https://wa.me/543442405219?text=Hola%20Enerbyte,%20quiero%20comenzar%20mi%20hogar%20inteligente."
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="/images/popup1welcome.webp"
    alt="Enerbyte"
    className="w-full rounded-3xl shadow-2xl hover:scale-[1.01] transition duration-300"
  />
</a>
</div>
</div>

    </>           
  );
}