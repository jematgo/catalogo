# 📱 Catálogo de Fundas para Candy Bar - Matías

Un sitio web moderno y elegante para mostrar fundas personalizadas para candy bar, construido con React y diseñado con el estilo minimalista de Apple.

## 🌐 URLs del Proyecto

- **Sitio Web en Vivo:** https://rhpnlolt.manus.space
- **Repositorio GitHub:** https://github.com/jematgo/catalogo

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework principal
- **Vite** - Herramienta de construcción y desarrollo
- **Tailwind CSS** - Framework de estilos utilitarios
- **Bootstrap 5.3.7** - Componentes y sistema de grid
- **Shadcn/UI** - Componentes de interfaz de usuario
- **Lucide React** - Iconos modernos
- **Framer Motion** - Animaciones suaves

## 📁 Estructura del Proyecto

```
src/
├── assets/
│   └── images/
│       ├── categories/          # 📂 CARPETA PRINCIPAL DE IMÁGENES
│       │   ├── futbol/         # Imágenes de fundas de fútbol
│       │   ├── princesas/      # Imágenes de fundas de princesas
│       │   ├── disney/         # Imágenes de fundas de Disney
│       │   ├── superheroes/    # Imágenes de fundas de superhéroes
│       │   ├── animales/       # Imágenes de fundas de animales
│       │   └── bebes/          # Imágenes de fundas de bebés
│       └── [imágenes actuales] # Imágenes existentes del proyecto
├── components/
│   ├── ui/                     # Componentes de Shadcn/UI
│   ├── Header.jsx              # Encabezado del sitio
│   ├── Hero.jsx                # Sección principal de bienvenida
│   ├── CategoryGrid.jsx        # Grid de categorías
│   ├── ProductGrid.jsx         # Grid de productos
│   ├── Footer.jsx              # Pie de página
│   └── WhatsAppFloat.jsx       # 💬 ICONO FLOTANTE DE WHATSAPP
├── data/
│   └── products.js             # 📊 DATOS DE PRODUCTOS Y CATEGORÍAS
├── lib/
│   └── utils.js                # Utilidades de Tailwind/Shadcn
└── hooks/
    └── use-mobile.js           # Hook para detectar dispositivos móviles
```

## 🎨 Diseño y Estilo

### Paleta de Colores (Estilo Apple)
- **Primario:** #007AFF (Azul Apple)
- **Fondo:** #FFFFFF (Blanco)
- **Texto:** #1D1D1F (Gris oscuro)
- **Secundario:** #F5F5F7 (Gris claro)
- **Bordes:** #E5E5E7 (Gris muy claro)

### Tipografía
- **Fuente principal:** -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue'
- **Tamaños:** Responsive con escalado automático

## 📝 Cómo Personalizar el Contenido

### 🖼️ Añadir Nuevas Imágenes

1. **Ubicación:** Coloca las imágenes en `src/assets/images/categories/[categoria]/`
2. **Formatos soportados:** .jpg, .jpeg, .png, .webp
3. **Tamaño recomendado:** 400x400px o superior (cuadrado)
4. **Nomenclatura:** Usa nombres descriptivos (ej: `funda-futbol-boca.jpg`)

### 📊 Modificar Productos

Edita el archivo `src/data/products.js`:

```javascript
// Ejemplo de producto
{
  id: 'futbol-1',
  name: 'Nombre de la Funda',
  description: 'Descripción del producto',
  image: '/src/assets/images/categories/futbol/mi-imagen.jpg', // 🔗 RUTA DE LA IMAGEN
  category: 'futbol'
}
```

### 🔗 Enlaces de Redes Sociales

Modifica el archivo `src/components/Footer.jsx`:

```javascript
// Busca estas líneas y reemplaza los enlaces:
<a 
  href="https://www.instagram.com/TU_USUARIO" // 📱 COLOCA TU INSTAGRAM AQUÍ
  target="_blank" 
  rel="noopener noreferrer"
>
  <Instagram className="w-5 h-5" />
</a>

<a 
  href="https://www.facebook.com/TU_PAGINA" // 📘 COLOCA TU FACEBOOK AQUÍ
  target="_blank" 
  rel="noopener noreferrer"
>
  <Facebook className="w-5 h-5" />
</a>
```

### 📍 Ubicación en Google Maps

En `src/components/Footer.jsx`, busca:

```javascript
<a 
  href="TU_ENLACE_DE_GOOGLE_MAPS" // 🗺️ COLOCA TU UBICACIÓN AQUÍ
  target="_blank" 
  rel="noopener noreferrer"
>
  Buenos Aires, Argentina
</a>
```

### 💬 WhatsApp Flotante

En `src/components/WhatsAppFloat.jsx`, busca:

```javascript
const whatsappNumber = "+5491123456789"; // 📞 COLOCA TU NÚMERO AQUÍ
const whatsappMessage = "Hola! Me interesa consultar sobre las fundas para candy bar"; // 💬 PERSONALIZA EL MENSAJE
```

### 📞 Información de Contacto

En `src/components/Footer.jsx` y `src/components/Header.jsx`, busca:

```javascript
// Teléfono
<Phone className="w-4 h-4 mr-3 text-blue-400" />
<span className="text-gray-300">+54 9 11 2345-6789</span> // 📞 TU TELÉFONO

// Email
<Mail className="w-4 h-4 mr-3 text-blue-400" />
<span className="text-gray-300">matias@fundascandy.com</span> // 📧 TU EMAIL
```

## 🚀 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la construcción
npm run preview
```

## 📦 Dependencias Principales

```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "tailwindcss": "^3.4.17",
  "bootstrap": "^5.3.7",
  "lucide-react": "^0.510.0",
  "framer-motion": "^11.15.0"
}
```

## 🎯 Características Principales

### ✨ Funcionalidades
- **Navegación por categorías** - Fútbol, Princesas, Disney, Superhéroes, Animales, Bebés
- **Grid responsive** - Se adapta a móviles, tablets y desktop
- **Integración con WhatsApp** - Botones de consulta directa
- **Sistema de "me gusta"** - Para productos favoritos
- **Animaciones suaves** - Transiciones elegantes estilo Apple
- **SEO optimizado** - Meta tags y estructura semántica

### 📱 Responsive Design
- **Móvil:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

## 🔧 Personalización Avanzada

### Colores
Modifica las variables CSS en `src/App.css`:

```css
:root {
  --primary: #007aff;        /* Color principal */
  --background: #ffffff;     /* Fondo */
  --foreground: #1d1d1f;     /* Texto */
  /* ... más variables */
}
```

### Componentes Bootstrap
Puedes usar cualquier componente de Bootstrap 5.3.7:

```jsx
// Ejemplo de modal
<div className="modal fade" id="exampleModal">
  <div className="modal-dialog">
    <div className="modal-content">
      {/* Contenido del modal */}
    </div>
  </div>
</div>
```

## 📋 Lista de Verificación para Personalización

- [ ] Reemplazar imágenes en `src/assets/images/categories/`
- [ ] Actualizar datos de productos en `src/data/products.js`
- [ ] Configurar enlaces de redes sociales en `src/components/Footer.jsx`
- [ ] Añadir ubicación de Google Maps en `src/components/Footer.jsx`
- [ ] Configurar número de WhatsApp en `src/components/WhatsAppFloat.jsx`
- [ ] Actualizar información de contacto (teléfono, email)
- [ ] Personalizar mensajes y textos
- [ ] Probar en diferentes dispositivos

## 🆘 Soporte y Contacto

Si necesitas ayuda con el código o tienes preguntas:

1. **Revisa este README** - Contiene la mayoría de respuestas
2. **Busca los comentarios en el código** - Están marcados con 🔗, 📱, 💬, etc.
3. **Consulta la documentación** de React, Tailwind CSS o Bootstrap

## 📄 Licencia

Este proyecto es privado y pertenece a Matías para su emprendimiento de fundas para candy bar.

---

**¡Importante!** Siempre haz una copia de seguridad antes de realizar cambios importantes. Usa Git para versionar tus modificaciones:

```bash
git add .
git commit -m "Descripción de los cambios"
git push origin master
```

