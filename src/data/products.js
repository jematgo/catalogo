// Datos de productos organizados por categorías
export const categories = [
  {
    id: 'futbol',
    name: 'Fútbol',
    description: 'Fundas temáticas de fútbol para todos los equipos',
    image: '/src/assets/images/49d9hrjY1lY2.png'
  },
  {
    id: 'princesas',
    name: 'Princesas',
    description: 'Fundas mágicas de princesas para fiestas especiales',
    image: '/src/assets/images/nXK5FNI5gIN5.jpg'
  },
  {
    id: 'disney',
    name: 'Disney',
    description: 'Personajes Disney favoritos para decorar tu candy bar',
    image: '/src/assets/images/sEpoMSw0yucl.png'
  },
  {
    id: 'superheroes',
    name: 'Superhéroes',
    description: 'Fundas de superhéroes para fiestas llenas de acción',
    image: '/src/assets/images/NqAHDoIa4f8O.webp'
  },
  {
    id: 'animales',
    name: 'Animales',
    description: 'Fundas con adorables animales y temática safari',
    image: '/src/assets/images/qj9DoeA1Xp90.jpg'
  },
  {
    id: 'bebes',
    name: 'Bebés',
    description: 'Fundas tiernas para celebraciones de bebés',
    image: '/src/assets/images/fUiGyEJexFc1.jpg'
  }
];

export const products = {
  futbol: [
    {
      id: 'futbol-1',
      name: 'Funda Fútbol Clásico',
      description: 'Funda con diseño de pelota de fútbol y cancha',
      image: '/src/assets/images/49d9hrjY1lY2.png',
      category: 'futbol'
    },
    {
      id: 'futbol-2',
      name: 'Funda Boca Juniors',
      description: 'Funda oficial de Boca Juniors',
      image: '/src/assets/images/TF6tQ6iYOSsw.jpg',
      category: 'futbol'
    },
    {
      id: 'futbol-3',
      name: 'Funda River Plate',
      description: 'Funda oficial de River Plate',
      image: '/src/assets/images/ZJAEsWbnRRCp.jpg',
      category: 'futbol'
    },
    {
      id: 'futbol-4',
      name: 'Funda Pelota Boca',
      description: 'Funda circular con pelota de Boca',
      image: '/src/assets/images/m4gxfbXi8TmJ.webp',
      category: 'futbol'
    }
  ],
  princesas: [
    {
      id: 'princesas-1',
      name: 'Funda Princesas Disney',
      description: 'Funda con todas las princesas Disney',
      image: '/src/assets/images/nXK5FNI5gIN5.jpg',
      category: 'princesas'
    },
    {
      id: 'princesas-2',
      name: 'Funda Rapunzel',
      description: 'Funda temática de Rapunzel',
      image: '/src/assets/images/KT8mBgZORV98.jpg',
      category: 'princesas'
    },
    {
      id: 'princesas-3',
      name: 'Funda Corona Real',
      description: 'Funda elegante con corona dorada',
      image: '/src/assets/images/CkSU227iSTWg.jpg',
      category: 'princesas'
    },
    {
      id: 'princesas-4',
      name: 'Funda Glitter Force',
      description: 'Funda colorida de Glitter Force',
      image: '/src/assets/images/Pm5KxAfabTsp.jpg',
      category: 'princesas'
    }
  ],
  disney: [
    {
      id: 'disney-1',
      name: 'Funda Frozen',
      description: 'Funda de Frozen con Elsa y Anna',
      image: '/src/assets/images/sEpoMSw0yucl.png',
      category: 'disney'
    },
    {
      id: 'disney-2',
      name: 'Funda Stitch',
      description: 'Funda adorable de Stitch',
      image: '/src/assets/images/7kF9Jh8QSEH4.jpg',
      category: 'disney'
    },
    {
      id: 'disney-3',
      name: 'Funda Moana',
      description: 'Funda aventurera de Moana',
      image: '/src/assets/images/EQAlLNTMEAHT.webp',
      category: 'disney'
    },
    {
      id: 'disney-4',
      name: 'Funda Intensamente',
      description: 'Funda de Intensamente (Inside Out)',
      image: '/src/assets/images/YQl5cAxISRUE.webp',
      category: 'disney'
    }
  ],
  superheroes: [
    {
      id: 'superheroes-1',
      name: 'Funda Avengers',
      description: 'Funda de los Vengadores',
      image: '/src/assets/images/NqAHDoIa4f8O.webp',
      category: 'superheroes'
    },
    {
      id: 'superheroes-2',
      name: 'Funda Superhéroes BAM',
      description: 'Funda con efectos de cómic BAM',
      image: '/src/assets/images/pxnGypad2q0P.jpg',
      category: 'superheroes'
    },
    {
      id: 'superheroes-3',
      name: 'Funda Hombre Araña',
      description: 'Funda del Hombre Araña',
      image: '/src/assets/images/oTb94nkSjnck.webp',
      category: 'superheroes'
    },
    {
      id: 'superheroes-4',
      name: 'Funda Cómic Style',
      description: 'Funda estilo cómic con efectos',
      image: '/src/assets/images/1HJzZpHUDgSU.jpg',
      category: 'superheroes'
    }
  ],
  animales: [
    {
      id: 'animales-1',
      name: 'Funda Safari',
      description: 'Funda con animales del safari',
      image: '/src/assets/images/qj9DoeA1Xp90.jpg',
      category: 'animales'
    },
    {
      id: 'animales-2',
      name: 'Funda Wild One',
      description: 'Funda temática de animales salvajes',
      image: '/src/assets/images/w9U8JRYI7s3v.png',
      category: 'animales'
    },
    {
      id: 'animales-3',
      name: 'Funda Capibara',
      description: 'Funda adorable de capibara',
      image: '/src/assets/images/ZtyQJFzOujMU.webp',
      category: 'animales'
    },
    {
      id: 'animales-4',
      name: 'Funda Panda',
      description: 'Funda tierna de panda',
      image: '/src/assets/images/2QXO0rYrp8vQ.jpg',
      category: 'animales'
    }
  ],
  bebes: [
    {
      id: 'bebes-1',
      name: 'Funda Osito Bebé',
      description: 'Funda suave con ositos para bebés',
      image: '/src/assets/images/fUiGyEJexFc1.jpg',
      category: 'bebes'
    },
    {
      id: 'bebes-2',
      name: 'Funda Arcoíris',
      description: 'Funda colorida con arcoíris',
      image: '/src/assets/images/mAa02i4mJDtb.png',
      category: 'bebes'
    },
    {
      id: 'bebes-3',
      name: 'Funda Paw Patrol',
      description: 'Funda de Paw Patrol para niños',
      image: '/src/assets/images/Cubo8cyJc04d.png',
      category: 'bebes'
    }
  ]
};

export const getAllProducts = () => {
  return Object.values(products).flat();
};

export const getProductsByCategory = (categoryId) => {
  return products[categoryId] || [];
};

export const getProductById = (productId) => {
  const allProducts = getAllProducts();
  return allProducts.find(product => product.id === productId);
};

