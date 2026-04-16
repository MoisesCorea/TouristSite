# 🇭🇳 Honduras Travel

Portal web sobre turismo en Honduras, con información detallada de sus destinos más destacados.

## 📋 Descripción

**Honduras Travel** es un sitio web estático que promueve el turismo en Honduras. Cuenta con páginas informativas sobre los principales destinos turísticos del país, incluyendo imágenes, actividades y puntos de interés de cada lugar.

## 🗺️ Destinos

| Destino | Departamento | Atractivo principal |
|---------|-------------|---------------------|
| **Utila** | Islas de la Bahía | Buceo y arrecifes de coral |
| **Roatán** | Islas de la Bahía | Playas de arena blanca |
| **Copán Ruinas** | Copán | Sitio arqueológico maya (Patrimonio UNESCO) |
| **Trujillo** | Colón | Historia colonial y playas |

## 📁 Estructura del proyecto

```
TouristSite/
├── src/
│   ├── partials/              # Componentes reutilizables (PostHTML)
│   │   ├── header.html        # Header para páginas raíz
│   │   ├── header-detail.html # Header para páginas de detalles
│   │   ├── footer.html        # Footer para páginas raíz
│   │   └── footer-detail.html # Footer para páginas de detalles
│   ├── detalles/              # Páginas de detalle por destino
│   │   ├── detalle_utila.html
│   │   ├── detalle_roatan.html
│   │   ├── detalle_copanrui.html
│   │   └── detalle_colon.html
│   ├── images/                # Imágenes optimizadas del sitio
│   ├── index.html             # Página de inicio
│   ├── sitios.html            # Listado de destinos
│   ├── presentacion.html      # Acerca del proyecto
│   ├── fuentes.html           # Fuentes y atribuciones
│   ├── style.css              # Estilos globales
│   └── app.js                 # JavaScript principal
├── .posthtmlrc                # Configuración de PostHTML
├── package.json
└── README.md
```

## 🛠️ Tecnologías

- **HTML5** — Estructura semántica
- **CSS3** — Estilos con variables CSS y diseño responsive
- **JavaScript (ES Modules)** — Lógica del cliente
- **Parcel** — Bundler y servidor de desarrollo
- **PostHTML Include** — Componentes reutilizables de header/footer
- **Lazysizes** — Carga diferida de imágenes

## 🚀 Instalación y uso

### Requisitos
- Node.js 16+
- npm

### Instalar dependencias
```bash
npm install
```

### Servidor de desarrollo
```bash
npm run start
```
El sitio estará disponible en `http://localhost:1234`

### Build de producción
```bash
npm run build
```
Los archivos compilados se generan en la carpeta `dist/`.

## ✨ Características

- ✅ Diseño **responsive** — adaptado a móvil, tablet y escritorio
- ✅ **Imágenes optimizadas** con `srcset` y formatos WebP
- ✅ **Lazy loading** de imágenes para mejor rendimiento
- ✅ **Header/Footer** componentizados con PostHTML Include
- ✅ Accesibilidad: skip link, atributos `alt`, estructura semántica
- ✅ **SEO** optimizado con meta descriptions y títulos únicos por página
- ✅ Animaciones CSS suaves en el SVG de la página de presentación

## 👤 Autor

**Moisés Enrique Corea Villanueva**

## 📄 Licencia

Los contenidos se distribuyen bajo licencia [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/).
