import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

// 🦶 COMPONENTE FOOTER (PIE DE PÁGINA)
// ====================================
// Este componente contiene la información de contacto y enlaces a redes sociales.
// Aquí puedes personalizar tu información de contacto.

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Fundas Candy Bar</h3>
            <p className="text-gray-300 mb-4">
              Especializados en fundas personalizadas para candy bar. 
              Hacemos realidad la decoración de tus eventos más especiales.
            </p>
            
            {/* 📱 ENLACES A REDES SOCIALES - PERSONALIZA AQUÍ */}
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/TU_USUARIO_INSTAGRAM" // 📸 COLOCA TU INSTAGRAM AQUÍ
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                title="Síguenos en Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/TU_PAGINA_FACEBOOK" // 📘 COLOCA TU FACEBOOK AQUÍ
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                title="Síguenos en Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          {/* 📞 INFORMACIÓN DE CONTACTO - PERSONALIZA AQUÍ */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                {/* 📞 COLOCA TU NÚMERO DE TELÉFONO AQUÍ */}
                <span className="text-gray-300">+54 9 11 2345-6789</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                {/* 📧 COLOCA TU EMAIL AQUÍ */}
                <span className="text-gray-300">matias@fundascandy.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                {/* 🗺️ COLOCA TU UBICACIÓN Y ENLACE A GOOGLE MAPS AQUÍ */}
                <a 
                  href="https://maps.google.com/?q=Buenos+Aires+Argentina" // 🔗 REEMPLAZA CON TU ENLACE DE GOOGLE MAPS
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  title="Ver ubicación en Google Maps"
                >
                  Buenos Aires, Argentina
                </a>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Fútbol</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Princesas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Disney</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Superhéroes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Animales</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Bebés</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Fundas Candy Bar - Matías. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

