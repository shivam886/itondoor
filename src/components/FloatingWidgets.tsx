import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingWidgets() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Call Button */}
      <motion.a 
        href="tel:+919876543210"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-brand-electricBlue text-white rounded-full flex items-center justify-center shadow-lg shadow-brand-electricBlue/30 hover:bg-brand-darkBlue transition-colors"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
      
      {/* WhatsApp Button */}
      <motion.a 
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:bg-[#128C7E] transition-colors"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </div>
  );
}
