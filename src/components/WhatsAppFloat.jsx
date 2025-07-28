import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  // 💬 CONFIGURACIÓN DE WHATSAPP - PERSONALIZA AQUÍ
  const whatsappNumber = "+5491123456789"; // 📞 REEMPLAZA CON TU NÚMERO DE WHATSAPP
  const whatsappMessage = "Hola! Me interesa consultar sobre las fundas para candy bar"; // 💬 PERSONALIZA EL MENSAJE

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 apple-button"
        aria-label="Contactar por WhatsApp"
        title="¡Escríbenos por WhatsApp!"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
      
      {/* Efecto de pulso para llamar la atención */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
    </div>
  );
};

export default WhatsAppFloat;

