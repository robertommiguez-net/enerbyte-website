# Enerbyte - Documentación del Proyecto

## 📋 Resumen Ejecutivo

**Enerbyte** es una empresa argentina especializada en domótica, automatización, seguridad y eficiencia energética para hogares y negocios. Este proyecto es un sitio web profesional, moderno y responsive que comunica la propuesta de valor de la empresa.

**Ubicación**: Concepción del Uruguay, Entre Ríos, Argentina

---

## 🎨 Identidad de Marca

### Slogan
"Automatizamos el futuro"

### Frase Principal
"Tu hogar y tu negocio, verdaderamente inteligentes."

### Paleta de Colores
- **Azul Eléctrico**: #0066FF (color primario, energía, confianza)
- **Negro Grafito**: #0A0E27 (fondo principal, profesionalismo)
- **Cian Neón**: #00D9FF (detalles, acentos, tecnología)
- **Blanco**: #FFFFFF (tipografía principal)
- **Gris Oscuro**: #1A1F3A (elementos secundarios)

### Tipografía
- **Headings**: Poppins Bold (700, 800) - moderna, geométrica, fuerte
- **Body**: Inter Regular (400) - legible, profesional
- **Acentos**: Space Mono - detalles técnicos

### Estilo Visual
- **Futurista Realista**: Tecnología accesible, no intimidante
- **Premium**: Espaciado generoso, efectos sutiles
- **Limpio**: Minimalista pero con personalidad
- **Profesional**: Confiable y establecido

---

## 🏗️ Estructura del Sitio

### Secciones Principales

1. **Header/Navegación**
   - Logo de Enerbyte (símbolo geométrico)
   - Menú de navegación (Inicio, Nosotros, Soluciones, Cómo trabajamos, Contacto)
   - Botón CTA: "Solicitar asesoramiento"
   - Menú móvil responsive

2. **Hero Section**
   - Título principal: "Tu espacio, verdaderamente inteligente"
   - Descripción de propuesta de valor
   - Imagen hero (sala inteligente moderna)
   - Dos botones CTA
   - Indicadores visuales (4 beneficios clave)

3. **Sección Nosotros**
   - Diferencial: "No vendemos dispositivos. Diseñamos ecosistemas inteligentes"
   - Explicación de enfoque personalizado

4. **Sección Home Assistant**
   - "Control total. Sin complicaciones"
   - 7 beneficios listados
   - Imagen de automatización

5. **Sección Soluciones (6 servicios)**
   - Asesoramiento y planificación
   - Iluminación inteligente
   - Seguridad conectada
   - Climatización y confort
   - Automatización comercial
   - Ahorro energético

6. **Sección Cómo Trabajamos**
   - 5 pasos: Escuchamos → Diseñamos → Instalamos → Configuramos → Acompañamos

7. **Sección Beneficios**
   - Más comodidad
   - Más seguridad
   - Menos consumo
   - Soluciones a medida
   - Preparado para el futuro

8. **Sección Visión Futura**
   - "Domótica hoy. Energía inteligente mañana"
   - Visión a largo plazo de la empresa

9. **CTA Final**
   - "¿Listo para que tu casa o negocio trabaje para vos?"
   - Botones de acción

10. **Footer**
    - Información de contacto
    - Enlaces rápidos
    - Redes sociales
    - Copyright

---

## 🛠️ Stack Tecnológico

### Frontend
- **React 19** - Framework UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Componentes UI reutilizables
- **Lucide React** - Iconografía moderna
- **Wouter** - Enrutamiento ligero

### Herramientas
- **Vite** - Build tool y dev server
- **TypeScript** - Type safety
- **pnpm** - Package manager

### Hosting
- **Manus** - Plataforma de hosting automática

---

## 📁 Estructura de Archivos

```
enerbyte/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx          # Página principal (landing page)
│   │   │   └── NotFound.tsx      # Página 404
│   │   ├── components/
│   │   │   ├── ui/               # Componentes shadcn/ui
│   │   │   ├── ErrorBoundary.tsx
│   │   │   └── Map.tsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── App.tsx               # Rutas y layout principal
│   │   ├── main.tsx              # Entry point
│   │   └── index.css             # Estilos globales y temas
│   ├── public/
│   │   └── __manus__/            # Archivos de configuración
│   └── index.html
├── server/
│   └── index.ts                  # Servidor Express (placeholder)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🎯 Características Implementadas

### ✅ Diseño Responsivo
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Menú móvil colapsable
- Imágenes optimizadas

### ✅ Paleta de Colores Premium
- Tema oscuro por defecto (negro grafito)
- Acentos en azul eléctrico y cian neón
- Alto contraste para accesibilidad
- Variables CSS personalizadas

### ✅ Tipografía Moderna
- Poppins Bold para headings (impactante)
- Inter para body (legible)
- Jerarquía visual clara
- Tamaños responsivos

### ✅ Efectos Visuales
- Hover effects en botones y tarjetas
- Transiciones suaves (200-300ms)
- Gradientes sutiles
- Bordes con brillo neón

### ✅ Imágenes Generadas con IA
- Logo: Símbolo geométrico (hexágono/circuito)
- Hero: Sala inteligente moderna
- Automatización: Nodos interconectados
- Seguridad: Sistema conectado
- Eficiencia: Grid inteligente

### ✅ Navegación Intuitiva
- Menú sticky en header
- Enlaces internos con scroll suave
- Menú móvil responsive
- Botones CTA estratégicos

### ✅ Contenido Optimizado
- Redacción clara y persuasiva
- Enfoque en beneficios del usuario
- Llamadas a la acción claras
- Información de contacto visible

---

## 📊 Secciones por Objetivo

### Generación de Leads
- Hero section con CTA principal
- Sección "Cómo trabajamos" (genera confianza)
- CTA final con WhatsApp
- Información de contacto en footer

### Educación del Cliente
- Sección "Nosotros" (diferencial)
- Sección "Soluciones" (6 servicios)
- Sección "Home Assistant" (beneficios técnicos)
- Sección "Visión Futura" (escalabilidad)

### Credibilidad
- Diseño profesional y premium
- Proceso claro de 5 pasos
- Beneficios específicos y medibles
- Visión empresarial clara

---

## 🚀 Próximos Pasos Recomendados

### 1. Integración de Contacto (Prioridad Alta)
- Conectar botones WhatsApp a número real
- Formulario de contacto con validación
- Email de confirmación automático
- Integración con CRM (si aplica)

### 2. Galería de Proyectos (Prioridad Media)
- Agregar sección "Proyectos" con case studies
- Imágenes antes/después
- Testimonios de clientes
- Métricas de éxito

### 3. Blog/Recursos (Prioridad Media)
- Artículos sobre domótica
- Guías de instalación
- Tips de ahorro energético
- SEO optimization

### 4. Optimización SEO (Prioridad Alta)
- Meta tags y Open Graph
- Schema markup
- Sitemap.xml
- robots.txt
- Google Analytics

### 5. Análisis y Mejora (Prioridad Media)
- Heatmaps de usuario
- A/B testing de CTAs
- Análisis de conversión
- Optimización de velocidad

---

## 📱 Compatibilidad

- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 640px)
- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)
- ✅ Dark mode (por defecto)

---

## 🔐 Consideraciones de Seguridad

- ✅ HTTPS automático (Manus)
- ✅ Sin datos sensibles en frontend
- ✅ Validación de formularios (si se agrega)
- ✅ Rate limiting en APIs (si se agrega)

---

## 📞 Información de Contacto

**Empresa**: Enerbyte
**Ubicación**: Concepción del Uruguay, Entre Ríos, Argentina
**Slogan**: Automatizamos el futuro

**Datos a completar**:
- 📲 WhatsApp: [Agregar número]
- 📧 Email: [Agregar email]
- 🔗 Instagram: @enerbyte.ar
- 🔗 Facebook: Enerbyte

---

## 📝 Notas de Desarrollo

### Archivos Clave
- `client/src/pages/Home.tsx` - Página principal (toda la lógica del sitio)
- `client/src/index.css` - Estilos globales y paleta de colores
- `client/src/App.tsx` - Configuración de rutas y tema
- `package.json` - Dependencias y scripts

### Comandos Útiles
```bash
# Desarrollo
pnpm dev

# Build para producción
pnpm build

# Preview de build
pnpm preview

# Verificar tipos
pnpm check

# Formatear código
pnpm format
```

### Personalización Futura
- Cambiar colores: Editar variables CSS en `index.css`
- Modificar contenido: Editar `Home.tsx`
- Agregar páginas: Crear en `pages/` y agregar rutas en `App.tsx`
- Cambiar tipografía: Modificar imports de Google Fonts en `index.html`

---

## ✨ Detalles de Diseño

### Filosofía de Diseño
**Futurismo Dinámico Asimétrico**: Representa la automatización inteligente mediante una interfaz moderna, accesible y en movimiento constante.

### Principios Clave
1. **Asimetría Intencional**: Layouts no centrados, elementos flotantes
2. **Movimiento Controlado**: Animaciones suaves que sugieren energía
3. **Contraste Dramático**: Fondos oscuros con detalles neón brillantes
4. **Accesibilidad Tecnológica**: Interfaces claras, sin complejidad innecesaria

### Elementos Distintivos
- Líneas diagonales neón como separadores
- Tarjetas flotantes con efecto de profundidad
- Iconografía geométrica y limpia
- Gradientes sutiles en fondos

---

**Versión**: 1.0
**Fecha**: Junio 2026
**Estado**: Listo para publicar
