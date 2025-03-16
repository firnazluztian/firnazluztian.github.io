import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import { resume } from "@/constants/resume";

export const Certifications = () => {
  const { certifications } = resume.projects;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Icons Section */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-16"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Icon icon={cert.icon} width={48} height={48} />
            <h3 className="text-xl font-semibold text-gray-800">{cert.title}</h3>
          </motion.div>
        ))}
      </motion.div>
      <motion.p className="text-theme text-center"><a href="https://www.linkedin.com/in/firnaz-luztian-adiansyah-6526b8194/details/certifications/">Source: Linkedin Certifications</a></motion.p>
    </div>
  );
}; 