/**
 * Enerbyte - Professional Landing Page
 * Design: Futuristic Dynamic Asymmetric
 * Color Scheme: Electric Blue (#0066FF) + Black Graphite (#0A0E27) + Cyan Neon (#00D9FF)
 */

import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, Lock, Leaf, Smartphone, Cog, ArrowRight, ShoppingBag, House, Zap, Shield, Lightbulb, Camera, DoorOpen, CheckCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const storeItems = [
  {
    title: "Kit Smart Home Básico",
    category: "Hogar",
    icon: House,
    description: "Ideal para comenzar a automatizar tu casa de forma simple.",
    price: "Consultar",
    benefits: ["Control desde el celular", "Instalación simple", "Escalable"],
    whatsappText: "Hola, quiero consultar por el Kit Smart Home Básico",
  },
  {
    title: "Kit Ahorro Energético",
    category: "Ahorro",
    icon: Zap,
    description: "Pensado para optimizar el consumo de termotanques y equipos eléctricos.",
    price: "Consultar",
    benefits: ["Reduce consumo", "Programación horaria", "Control remoto"],
    whatsappText: "Hola, quiero consultar por el Kit Ahorro Energético",
  },
  {
    title: "Kit Luces Inteligentes",
    category: "Iluminación",
    icon: Lightbulb,
    description: "Automatizá luces, escenas y rutinas desde tu celular.",
    price: "Consultar",
    benefits: ["Escenas smart", "Encendido remoto", "Compatible con rutinas"],
    whatsappText: "Hola, quiero consultar por el Kit Luces Inteligentes",
  },
  {
    title: "Kit Seguridad",
    category: "Seguridad",
    icon: Shield,
    description: "Sensores, alertas y monitoreo para hogares o comercios.",
    price: "Consultar",
    benefits: ["Alertas al celular", "Mayor protección", "Sistema ampliable"],
    whatsappText: "Hola, quiero consultar por el Kit Seguridad",
  },
  {
    title: "Kit Cámaras y Videoportero",
    category: "Cámaras",
    icon: Camera,
    description: "Visualizá ingresos, cámaras y accesos desde cualquier lugar.",
    price: "Consultar",
    benefits: ["Vista remota", "Más control", "Ideal para accesos"],
    whatsappText: "Hola, quiero consultar por el Kit Cámaras y Videoportero",
  },
  {
    title: "Kit Accesos Inteligentes",
    category: "Accesos",
    icon: DoorOpen,
    description: "Soluciones para cerraduras, portones y accesos automatizados.",
    price: "Consultar",
    benefits: ["Acceso cómodo", "Más seguridad", "Control personalizado"],
    whatsappText: "Hola, quiero consultar por el Kit Accesos Inteligentes",
  },
];
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Enerbyte" className="h-8 w-8" />
            <span className="text-xl font-bold text-foreground">Enerbyte</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm text-muted-foreground hover:text-accent transition">Inicio</a>
            <a href="#nosotros" className="text-sm text-muted-foreground hover:text-accent transition">Nosotros</a>
            <a href="#soluciones" className="text-sm text-muted-foreground hover:text-accent transition">Soluciones</a>
            <a href="#tienda" className="text-sm text-muted-foreground hover:text-accent transition">Tienda</a>
            <a href="#como-trabajamos" className="text-sm text-muted-foreground hover:text-accent transition">Cómo trabajamos</a>
            <a href="#contacto" className="text-sm text-muted-foreground hover:text-accent transition">Contacto</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-white gap-2" onClick={() => window.open('https://wa.me/543442405219', "_blank")}>
              Solicitar asesoramiento
              <ArrowRight className="w-4 h-4" />
            </Button>
            <button 
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border">
            <nav className="container py-4 space-y-4">
              <a href="#inicio" className="block text-sm text-muted-foreground hover:text-accent transition">Inicio</a>
              <a href="#nosotros" className="block text-sm text-muted-foreground hover:text-accent transition">Nosotros</a>
              <a href="#soluciones" className="block text-sm text-muted-foreground hover:text-accent transition">Soluciones</a>
              <a href="#tienda" className="block text-sm text-muted-foreground hover:text-accent transition">Tienda</a>
              <a href="#como-trabajamos" className="block text-sm text-muted-foreground hover:text-accent transition">Cómo trabajamos</a>
              <a href="#contacto" className="block text-sm text-muted-foreground hover:text-accent transition">Contacto</a>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2">
                Solicitar asesoramiento
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Tu espacio, <span className="text-accent">verdaderamente</span> inteligente.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En Enerbyte transformamos hogares, comercios y empresas mediante automatización inteligente, seguridad conectada y eficiencia energética.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Integramos tecnología moderna para que puedas controlar luces, climatización, cámaras, rutinas y consumo eléctrico desde tu celular, de forma simple, segura y personalizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2" onClick={() => window.open('https://wa.me/543442405219', "_blank")}>
                  Hablemos de tu proyecto
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent" onClick={() => document.getElementById("soluciones")?.scrollIntoView({ behavior: "smooth" })}>
                  Ver soluciones
                </Button>
              </div>
            </div>

            <div className="relative block mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-lg blur-2xl"></div>
              <img 
                src="/images/hero.png" 
                alt="Smart Home" 
                className="relative rounded-lg shadow-2xl border border-accent/30 hover:border-accent/60 transition-all duration-300" 
              />
            </div>
          </div>

          {/* Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-border">
            {[
              { icon: Smartphone, label: 'Control desde celular' },
              { icon: Zap, label: 'Domótica personalizada' },
              { icon: Leaf, label: 'Ahorro energético' },
              { icon: Lock, label: 'Seguridad inteligente' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <item.icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-sm text-muted-foreground group-hover:text-accent transition-colors">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differential Section */}
      <section id="nosotros" className="py-20 md:py-32 bg-secondary/30 border-t border-accent/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              No vendemos dispositivos. <span className="text-accent">Diseñamos ecosistemas</span> inteligentes.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Una casa inteligente no es solo una luz que se enciende desde el celular. Es un sistema pensado para adaptarse a tu forma de vivir, mejorar tu seguridad, reducir consumos y simplificar tus rutinas diarias.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              En Enerbyte analizamos cada espacio, cada necesidad y cada presupuesto para crear soluciones reales, útiles y escalables.
            </p>
          </div>
        </div>
      </section>

      {/* Home Assistant Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Control total. <span className="text-accent">Sin complicaciones.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Integramos soluciones compatibles con Home Assistant, asistentes de voz, sensores, cámaras, relés inteligentes, sistemas Wi-Fi y tecnologías IoT para centralizar el control de tu hogar o negocio.
              </p>
              <div className="space-y-3">
                {[
                  'Control desde celular',
                  'Automatizaciones personalizadas',
                  'Integración con Google Home y Alexa',
                  'Escenas inteligentes',
                  'Sensores de presencia, movimiento y apertura',
                  'Paneles de control visuales',
                  'Sistema preparado para crecer'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-5 h-5 rounded-full border border-accent flex items-center justify-center group-hover:bg-accent/20 transition">
                      <span className="text-xs text-accent">✓</span>
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg blur-2xl"></div>
              <img 
                src="/manus-storage/automation-abstract_50e9bb3a.png" 
                alt="Automatización" 
                className="relative rounded-lg shadow-2xl border border-accent/30 hover:border-accent/60 transition-all duration-300" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="soluciones" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Soluciones inteligentes de principio a fin.
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Asesoramiento y planificación',
                desc: 'Conocemos tu espacio, tus necesidades y tus objetivos. Diseñamos una solución a medida antes de instalar cualquier dispositivo.'
              },
              {
                num: '02',
                title: 'Iluminación inteligente',
                desc: 'Automatizamos luces interiores, exteriores, escenas, horarios y sensores para mejorar comodidad y reducir consumo.'
              },
              {
                num: '03',
                title: 'Seguridad conectada',
                desc: 'Instalamos cámaras, sensores, alarmas y notificaciones inteligentes para proteger hogares, comercios y oficinas.'
              },
              {
                num: '04',
                title: 'Climatización y confort',
                desc: 'Automatizamos aire acondicionado, calefacción, ventilación y rutinas para lograr mayor confort y eficiencia.'
              },
              {
                num: '05',
                title: 'Automatización comercial',
                desc: 'Creamos soluciones para negocios, oficinas, locales, consultorios, alojamientos y espacios productivos.'
              },
              {
                num: '06',
                title: 'Ahorro energético',
                desc: 'Optimizamos consumos eléctricos mediante programación, medición, control de cargas y automatizaciones inteligentes.'
              }
            ].map((service, i) => (
              <div 
                key={i} 
                className="group card-float bg-card border border-border rounded-lg p-8 hover:border-accent transition duration-300"
              >
                <div className="text-4xl font-bold text-accent mb-4 opacity-50 group-hover:opacity-100 transition duration-300">{service.num}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
    
    <div>
      <span className="text-blue-600 font-semibold uppercase tracking-widest">
        Para constructoras
      </span>

      <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">
        Sumá domótica a tus edificios desde el proyecto
      </h2>

      <p className="text-slate-600 text-lg mb-8">
        Enerbyte.ar diseña e integra soluciones de automatización para departamentos,
        edificios y desarrollos inmobiliarios, aumentando el valor de cada unidad
        y diferenciando tu proyecto frente a la competencia.
      </p>

      <a href="/Constructoras" className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition">
        Ver solución para constructoras
      </a>
    </div>

    <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl">
      <h3 className="text-2xl font-bold mb-5">
        Packs disponibles
      </h3>

      <ul className="space-y-4 text-slate-300">
        <li>✓ Pack Esencial Smart Ready</li>
        <li>✓ Pack Confort para departamentos modernos</li>
        <li>✓ Pack Premium para edificios de categoría</li>
        <li>✓ Pack Signature para proyectos de lujo</li>
      </ul>
    </div>

  </div>
</section>

      <section id="tienda" className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-14">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
        <ShoppingBag className="w-4 h-4" />
        Tienda Inteligente
      </div>

      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Kits inteligentes para tu hogar o negocio
      </h2>

      <p className="text-muted-foreground text-lg">
        Elegí una solución inicial y te asesoramos para adaptarla a tu instalación.
        Sin complicaciones, sin carrito y con atención personalizada.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {storeItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="group rounded-2xl border bg-card p-6 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition">
              <Icon className="w-7 h-7 text-primary" />
            </div>

            <span className="text-sm text-primary font-medium">
              {item.category}
            </span>

            <h3 className="text-xl font-bold mt-2 mb-3">
              {item.title}
            </h3>

            <p className="text-muted-foreground mb-5">
              {item.description}
            </p>

            <ul className="space-y-2 mb-6">
              {item.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-muted-foreground">Precio</span>
              <span className="text-xl font-bold">{item.price}</span>
            </div>

            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white gap-2"
              onClick={() =>
                window.open(
                  `https://wa.me/543442405219?text=${encodeURIComponent(item.whatsappText)}`,
                  "_blank"
                )
              }
            >
              Consultar por WhatsApp
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        );
      })}
    </div>

    <div className="mt-16 rounded-3xl bg-primary/10 p-8 md:p-12 text-center">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">
        ¿No sabés qué kit elegir?
      </h3>

      <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
        Contanos qué querés automatizar y te armamos una propuesta personalizada.
      </p>

      <Button
        size="lg"
        className="bg-primary hover:bg-primary/90 text-white gap-2"
        onClick={() =>
          window.open(
            "https://wa.me/543442405219?text=Hola,%20quiero%20asesoramiento%20para%20elegir%20un%20kit%20inteligente",
            "_blank"
          )
        }
      >
        Solicitar asesoramiento
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  </div>
</section>

      {/* How We Work Section */}
      <section id="como-trabajamos" className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            De la idea al espacio inteligente.
          </h2>
          
          <div className="grid md:grid-cols-5 gap-4 md:gap-2">
            {[
              { step: 'Escuchamos', desc: 'Conocemos qué querés automatizar, qué problema necesitás resolver y cuál es tu presupuesto.' },
              { step: 'Diseñamos', desc: 'Armamos una propuesta clara con dispositivos, funciones, instalación y posibilidades de crecimiento.' },
              { step: 'Instalamos', desc: 'Realizamos la instalación de forma prolija, segura y profesional.' },
              { step: 'Configuramos', desc: 'Creamos rutinas, escenas, controles desde celular y automatizaciones personalizadas.' },
              { step: 'Acompañamos', desc: 'Brindamos soporte, ajustes y mejoras para que el sistema siga evolucionando con vos.' }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent transition duration-300 card-float">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">{i + 1}</span>
                  </div>
                  <h3 className="font-bold mb-2 text-accent">{item.step}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Enerbyte Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Tecnología que trabaja para vos.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { icon: Smartphone, title: 'Más comodidad', desc: 'Controlá luces, cámaras, climatización y rutinas desde tu celular.' },
                { icon: Lock, title: 'Más seguridad', desc: 'Recibí alertas, monitoreá tu espacio y protegé lo que más importa.' },
                { icon: Leaf, title: 'Menos consumo', desc: 'Automatizá cargas, horarios y dispositivos para usar mejor la energía.' }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 group-hover:text-accent transition">✅ {benefit.title}</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {[
                { icon: Cog, title: 'Soluciones a medida', desc: 'No todos los hogares ni negocios necesitan lo mismo. Diseñamos cada proyecto según el caso.' },
                { icon: Zap, title: 'Preparado para el futuro', desc: 'Enerbyte.ar nace desde la domótica, pero evoluciona hacia energía inteligente, movilidad eléctrica y soluciones para vehículos eléctricos.' }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 group-hover:text-accent transition">✅ {benefit.title}</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="py-20 md:py-32 border-t border-accent/20">
        <div className="container max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Domótica hoy. <span className="text-accent">Energía inteligente</span> mañana.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Enerbyte.ar nace para acercar la automatización a hogares y negocios, pero nuestra visión va más allá.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Estamos construyendo una empresa preparada para integrar en el futuro soluciones de energía inteligente, cargadores para vehículos eléctricos, diagnóstico de baterías y tecnologías vinculadas a la movilidad eléctrica.
          </p>
          <p className="text-xl font-bold text-accent pt-4">
            Hoy automatizamos tu espacio. Mañana, conectamos tu energía.
          </p>
        </div>
      </section>    

      {/* CTA Section */}
      <section id="contacto" className="py-20 md:py-32 bg-secondary/30">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            ¿Listo para que tu casa o negocio trabaje para vos?
          </h2>
          <p className="text-lg text-muted-foreground">
            Solicitá una asesoría inicial y descubrí qué soluciones inteligentes podés implementar en tu espacio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2" onClick={() => window.open('https://wa.me/543442405219', "_blank")}>
              Solicitar asesoramiento por WhatsApp
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent" onClick={() => document.getElementById("soluciones")?.scrollIntoView({ behavior: "smooth" })}>
              Ver soluciones
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/50 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/logo.png" alt="Enerbyte" className="h-6 w-6" />
                <span className="font-bold">ENERBYTE.ar</span>
              </div>
              <p className="text-sm text-muted-foreground">Automatización y Energía Inteligente</p>
              <p className="text-xs text-muted-foreground mt-2">Domótica, seguridad, automatización y eficiencia energética para hogares y negocios.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-accent">Enlaces</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#inicio" className="hover:text-accent transition">Inicio</a></li>
                <li><a href="#nosotros" className="hover:text-accent transition">Nosotros</a></li>
                <li><a href="#tienda" className="hover:text-accent transition">Tienda</a></li>
                <li><a href="#soluciones" className="hover:text-accent transition">Soluciones</a></li>
                <li><a href="#como-trabajamos" className="hover:text-accent transition">Cómo trabajamos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-accent">Contacto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>📍 Concepción del Uruguay – Entre Ríos</li>
                <li>📲 WhatsApp: +54 (3442405219)</li>
                <li>📧 Email: enerbyte.ar@gmail.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-accent">Redes Sociales</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition">Instagram @enerbyte.ar</a></li>
                <li><a href="#" className="hover:text-accent transition">Facebook Enerbyte.ar</a></li>
                <li><a href="#" className="hover:text-accent transition">LinkedIn Enerbyte</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 - RMDesarrollos.net Enerbyte.ar. <span className="text-accent font-bold">Automatizamos el futuro.</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
