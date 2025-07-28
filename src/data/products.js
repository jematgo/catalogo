// 📊 ARCHIVO DE DATOS DE PRODUCTOS Y CATEGORÍAS
// ================================================
// Este archivo contiene toda la información de los productos y categorías del catálogo.
// Aquí puedes añadir, modificar o eliminar productos y categorías.

// 🖼️ INSTRUCCIONES PARA IMÁGENES:
// 1. Coloca las imágenes en: src/assets/images/categories/[nombre-categoria]/
// 2. Formatos soportados: .jpg, .jpeg, .png, .webp
// 3. Tamaño recomendado: 400x400px o superior (cuadrado)
// 4. Usa nombres descriptivos para las imágenes

// 📂 ESTRUCTURA DE CARPETAS DE IMÁGENES:
// src/assets/images/categories/
// ├── futbol/          # Imágenes de fundas de fútbol
// ├── princesas/       # Imágenes de fundas de princesas
// ├── disney/          # Imágenes de fundas de Disney
// ├── superheroes/     # Imágenes de fundas de superhéroes
// ├── animales/        # Imágenes de fundas de animales
// └── bebes/           # Imágenes de fundas de bebés

// 🎨 DEFINICIÓN DE CATEGORÍAS
export const categories = [
  {
    id: 'futbol',
    name: 'Fútbol',
    description: 'Fundas temáticas de fútbol para todos los equipos',
    // 🔗 IMAGEN DE LA CATEGORÍA - Cambia esta ruta por tu imagen
    image: '/src/assets/images/49d9hrjY1lY2.png'
  },
  {
    id: 'princesas',
    name: 'Princesas',
    description: 'Fundas mágicas de princesas para fiestas especiales',
    // 🔗 IMAGEN DE LA CATEGORÍA - Cambia esta ruta por tu imagen
    image: '/src/assets/images/nXK5FNI5gIN5.jpg'
  },
  {
    id: 'disney',
    name: 'Disney',
    description: 'Personajes Disney favoritos para decorar tu candy bar',
    // 🔗 IMAGEN DE LA CATEGORÍA - Cambia esta ruta por tu imagen
    image: '/src/assets/images/sEpoMSw0yucl.png'
  },
  {
    id: 'superheroes',
    name: 'Superhéroes',
    description: 'Fundas de superhéroes para fiestas llenas de acción',
    // 🔗 IMAGEN DE LA CATEGORÍA - Cambia esta ruta por tu imagen
    image: '/src/assets/images/NqAHDoIa4f8O.webp'
  },
  {
    id: 'animales',
    name: 'Animales',
    description: 'Fundas con adorables animales y temática safari',
    // 🔗 IMAGEN DE LA CATEGORÍA - Cambia esta ruta por tu imagen
    image: '/src/assets/images/qj9DoeA1Xp90.jpg'
  },
  {
    id: 'bebes',
    name: 'Bebés',
    description: 'Fundas tiernas para celebraciones de bebés',
    // 🔗 IMAGEN DE LA CATEGORÍA - Cambia esta ruta por tu imagen
    image: '/src/assets/images/fUiGyEJexFc1.jpg'
  }
];

// 🛍️ PRODUCTOS POR CATEGORÍA
// ===========================
// Para añadir un nuevo producto, copia la estructura de abajo y modifica los valores.
// Para eliminar un producto, simplemente borra todo el objeto del producto.

export const products = {
  // ⚽ CATEGORÍA: FÚTBOL
  // ===================
  futbol: [
    {
      id: 'futbol-1',
      name: 'Funda Fútbol Clásico',
      description: 'Funda con diseño de pelota de fútbol y cancha',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/49d9hrjY1lY2.png',
      category: 'futbol',
      // 🔗 ENLACE EXTERNO (OPCIONAL) - Añade un enlace a Pinterest, Instagram, etc.
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    },
    {
      id: 'futbol-2',
      name: 'Funda Boca Juniors',
      description: 'Funda oficial de Boca Juniors',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/CkSU227iSTWg.jpg',
      category: 'futbol',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    },
    {
      id: 'futbol-3',
      name: 'Funda River Plate',
      description: 'Funda oficial de River Plate',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/TF6tQ6iYOSsw.jpg',
      category: 'futbol',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    },
    {
      id: 'futbol-4',
      name: 'Funda Pelota Boca',
      description: 'Funda con pelota de Boca Juniors',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/jFNR96dO4PHf.jpg',
      category: 'futbol',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    }
  ],

  // 👸 CATEGORÍA: PRINCESAS
  // =======================
  princesas: [
    {
      id: 'princesas-1',
      name: 'Funda Princesas Disney',
      description: 'Funda con todas las princesas Disney',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/PMnzPIyprK6X.jpg',
      category: 'princesas',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    },
    {
      id: 'princesas-2',
      name: 'Funda Rapunzel',
      description: 'Funda temática de Rapunzel',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/IjXjcLIRiYxE.jpg',
      category: 'princesas',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    },
    {
      id: 'princesas-3',
      name: 'Funda Corona Real',
      description: 'Funda elegante con corona dorada',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/XjA4HMNJd3A0.jpg',
      category: 'princesas',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    },
    {
      id: 'princesas-4',
      name: 'Funda Sailor Moon',
      description: 'Funda de Sailor Moon y las Sailor Scouts',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/kiWXoNxO53rw.jpg',
      category: 'princesas',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    }
  ],

  // 🏰 CATEGORÍA: DISNEY
  // ====================
  disney: [
    {
      id: 'disney-1',
      name: 'Funda Mickey Mouse',
      description: 'Funda clásica de Mickey Mouse',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/YQl5cAxISRUE.webp',
      category: 'disney',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    },
    {
      id: 'disney-2',
      name: 'Funda Frozen',
      description: 'Funda de Frozen con Elsa y Anna',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/EQAlLNTMEAHT.webp',
      category: 'disney',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    },
    {
      id: 'disney-3',
      name: 'Funda Toy Story',
      description: 'Funda de Toy Story con Woody y Buzz',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/G8xlnVC3gl3x.webp',
      category: 'disney',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    },
    {
      id: 'disney-4',
      name: 'Funda Cars',
      description: 'Funda de Cars con Rayo McQueen',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/ZtyQJFzOujMU.webp',
      category: 'disney',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    }
  ],

  // 🦸 CATEGORÍA: SUPERHÉROES
  // =========================
  superheroes: [
    {
      id: 'superheroes-1',
      name: 'Funda Avengers',
      description: 'Funda de los Vengadores',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/ZJAEsWbnRRCp.jpg',
      category: 'superheroes',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    },
    {
      id: 'superheroes-2',
      name: 'Funda Spider-Man',
      description: 'Funda del Hombre Araña',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/JbspxPehzpsA.jpg',
      category: 'superheroes',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    },
    {
      id: 'superheroes-3',
      name: 'Funda Batman',
      description: 'Funda del Caballero de la Noche',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/fUiGyEJexFc1.jpg',
      category: 'superheroes',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    },
    {
      id: 'superheroes-4',
      name: 'Funda Wonder Woman',
      description: 'Funda de la Mujer Maravilla',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/oTb94nkSjnck.webp',
      category: 'superheroes',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    }
  ],

  // 🐾 CATEGORÍA: ANIMALES
  // ======================
  animales: [
    {
      id: 'animales-1',
      name: 'Funda Safari',
      description: 'Funda con animales del safari',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/TjV2KZdIogv4.jpg',
      category: 'animales',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    },
    {
      id: 'animales-2',
      name: 'Funda Granja',
      description: 'Funda con animales de la granja',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/JJ4xH0ZxN5AM.jpg',
      category: 'animales',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    },
    {
      id: 'animales-3',
      name: 'Funda Dinosaurios',
      description: 'Funda con dinosaurios prehistóricos',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/d09xYIOdVdCi.jpg',
      category: 'animales',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    },
    {
      id: 'animales-4',
      name: 'Funda Mascotas',
      description: 'Funda con perros y gatos adorables',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/gHcbv3XDXzzx.jpg',
      category: 'animales',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    }
  ],

  // 👶 CATEGORÍA: BEBÉS
  // ===================
  bebes: [
    {
      id: 'bebes-1',
      name: 'Funda Baby Shower',
      description: 'Funda tierna para baby shower',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/bPOfJlKWEXgg.jpg',
      category: 'bebes',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    },
    {
      id: 'bebes-2',
      name: 'Funda Ositos',
      description: 'Funda con ositos de peluche',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/nXK5FNI5gIN5.jpg',
      category: 'bebes',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    },
    {
      id: 'bebes-3',
      name: 'Funda Unicornio Bebé',
      description: 'Funda de unicornio para bebés',
      // 🔗 RUTA DE LA IMAGEN - Reemplaza con tu imagen
      image: '/src/assets/images/wpRCqDg7uA64.jpg',
      category: 'bebes',
      // 🔗 ENLACE EXTERNO (OPCIONAL)
      // externalLink: 'https://www.pinterest.com/pin/tu-pin-aqui/',
    }
  ]
};

// 🔍 FUNCIÓN PARA OBTENER PRODUCTOS POR CATEGORÍA
export const getProductsByCategory = (categoryId) => {
  return products[categoryId] || [];
};

// 🔍 FUNCIÓN PARA OBTENER UNA CATEGORÍA POR ID
export const getCategoryById = (categoryId) => {
  return categories.find(category => category.id === categoryId);
};

// 📝 INSTRUCCIONES PARA AÑADIR NUEVOS PRODUCTOS:
// ===============================================
// 1. Ve a la categoría correspondiente en el objeto 'products'
// 2. Copia uno de los objetos de producto existentes
// 3. Cambia el 'id' por uno único (ej: 'futbol-5', 'princesas-5', etc.)
// 4. Modifica 'name' y 'description' con tu información
// 5. Cambia la ruta de 'image' por tu nueva imagen
// 6. Asegúrate de que 'category' coincida con la categoría
// 7. Opcionalmente, añade un 'externalLink' si quieres enlazar a Pinterest, etc.

// 📝 INSTRUCCIONES PARA AÑADIR NUEVAS CATEGORÍAS:
// ===============================================
// 1. Añade un nuevo objeto al array 'categories'
// 2. Usa un 'id' único y descriptivo
// 3. Añade 'name' y 'description'
// 4. Coloca una imagen representativa en 'image'
// 5. Crea una nueva sección en el objeto 'products' con el mismo 'id'
// 6. Crea la carpeta correspondiente en src/assets/images/categories/

