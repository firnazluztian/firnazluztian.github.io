import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const ContactModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-theme flex items-center justify-center">
          Contact Me
        </h2>
        
        <div className="flex items-center mb-2">
          <Icon icon="mdi:email" className="mr-2" />
          <a
            href="mailto:firnazluztianadiansyah@gmail.com"
            className="text-lg hover:underline"
          >
            firnazluztianadiansyah@gmail.com
          </a>
        </div>
        
        <div className="flex items-center mb-2">
          <Icon icon="mdi:whatsapp" className="mr-2" />
          <span className="text-lg">(65) 84046974</span>
        </div>
        
        <div className="flex items-center mb-2">
          <Icon icon="mdi:phone" className="mr-2" />
          <span className="text-lg">(62) 81327368782</span>
        </div>
        
        <div className="flex items-center mb-4">
          <Icon icon="mdi:linkedin" className="mr-2" />
          <a
            href="https://www.linkedin.com/in/firnaz-luztian-adiansyah-6526b8194/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-lg"
          >
            FirnazLuztian
          </a>
        </div>
        
        <div className="flex items-center justify-center">
          <a
            href="https://docs.google.com/document/d/1TqtCslIiSuBjtmp9slNIkWSJ-nji97vdDGQkpw6JFn8/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-theme text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-200"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;
