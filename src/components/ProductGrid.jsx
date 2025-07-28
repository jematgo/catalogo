import { useState } from 'react';
import { ArrowLeft, Heart, Share2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProductsByCategory, categories } from '../data/products';

const ProductGrid = ({ categoryId, onBackClick }) => {
  const [likedProducts, setLikedProducts] = useState(new Set());
  
  const products = getProductsByCategory(categoryId);
  const category = categories.find(cat => cat.id === categoryId);

  const toggleLike = (productId) => {
    const newLiked = new Set(likedProducts);
    if (newLiked.has(productId)) {
      newLiked.delete(productId);
    } else {
      newLiked.add(productId);
    }
    setLikedProducts(newLiked);
  };

  const handleContact = (product) => {
    const message = `Hola! Me interesa la ${product.name}. ¿Podrías darme más información?`;
    const whatsappUrl = `https://wa.me/5491234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!category) {
    return <div>Categoría no encontrada</div>;
  }

  return (
    <section className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={onBackClick}
            className="mr-4 p-2 hover:bg-white"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {category.name}
            </h1>
            <p className="text-gray-600 mt-2">{category.description}</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={() => toggleLike(product.id)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-colors duration-200 ${
                      likedProducts.has(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/80 text-gray-700 hover:bg-white'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedProducts.has(product.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2 rounded-full bg-white/80 text-gray-700 hover:bg-white backdrop-blur-sm transition-colors duration-200">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <Button
                  onClick={() => handleContact(product)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  size="sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Consultar
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No hay productos disponibles en esta categoría.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;

