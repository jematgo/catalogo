import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

// 🎯 COMPONENTE HEADER (ENCABEZADO)
// =================================
// Este componente contiene la navegación principal del sitio.
// Aquí puedes personalizar el nombre del negocio y la información de contacto.

const Header = ({ onCategoryClick, onHomeClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 📂 CATEGORÍAS DE NAVEGACIÓN
  // Si añades nuevas categorías en products.js, también añádelas aquí
  const categories = [
    { id: 'futbol', name: 'Fútbol' },
    { id: 'princesas', name: 'Princesas' },
    { id: 'disney', name: 'Disney' },
    { id: 'superheroes', name: 'Superhéroes' },
    { id: 'animales', name: 'Animales' },
    { id: 'bebes', name: 'Bebés' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 🏷️ LOGO Y NOMBRE DEL NEGOCIO - PERSONALIZA AQUÍ */}
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={onHomeClick}
          >
            <h1 className="text-xl font-bold text-gray-900">
              Fundas Candy Bar {/* 🔗 CAMBIA EL NOMBRE DE TU NEGOCIO AQUÍ */}
            </h1>
            <p className="text-xs text-gray-600">by Matías</p> {/* 🔗 CAMBIA TU NOMBRE AQUÍ */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryClick(category.id)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {category.name}
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open('https://wa.me/5491234567890', '_blank')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Contactar
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    onCategoryClick(category.id);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  {category.name}
                </button>
              ))}
              <div className="pt-2">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => {
                    window.open('https://wa.me/5491234567890', '_blank');
                    setIsMenuOpen(false);
                  }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contactar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

