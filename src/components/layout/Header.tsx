import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { resume } from "@/constants/resume";
import { TypeWriter } from "../motion/motions";

export const Header = () => {
  const texts = ["Firnaz Luztian Adiansyah", "Available in the market"];
  const { socialMedia } = resume;

  return (
    <div className="bg-black bg-opacity-50 p-0 m-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col items-center justify-center min-h-screen w-screen"
      >
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Hi, I am{" "}
            <TypeWriter texts={texts} className="text-theme inline-block" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 px-4 sm:px-0"
          >
            <span className="text-theme font-bold">A software engineer</span>{" "}
            with a passion for building scalable and efficient systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4 sm:gap-6 justify-center mb-8 sm:mb-12"
          >
            {socialMedia.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-white hover:text-theme transition-colors duration-300 p-2"
              >
                <Icon
                  icon={social.icon}
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8"
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-theme text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 w-full sm:w-auto"
              onClick={() => {
                const aboutSection = document.getElementById("about");
                aboutSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More About Me
            </motion.button>

            <motion.a
              href={resume.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white"
          >
            <Icon
              icon="mdi:chevron-double-down"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
