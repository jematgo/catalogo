import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = ({ onExploreClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Fundas para
            <span className="block text-blue-600">Candy Bar</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Personaliza tus eventos con nuestras fundas temáticas. 
            Desde fútbol hasta princesas, tenemos el diseño perfecto para tu celebración.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              onClick={onExploreClick}
            >
              Explorar Catálogo
              <ArrowDown className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg"
              onClick={() => window.open('https://wa.me/5491234567890', '_blank')}
            >
              Consultar Precios
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-100 rounded-full opacity-50 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-100 rounded-full opacity-50 animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;

