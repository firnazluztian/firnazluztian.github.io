import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import { resume } from "@/constants/resume";

export const Skills = () => {
  const { skills, competencies } = resume.aboutMe;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="space-y-16"
      >
        <div>
          <motion.div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 place-items-center">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center"
              >
                <Icon icon={skill} width={48} height={48} className="text-gray-700" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Core Competencies</h2>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {competencies.map((competency, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-theme">{competency}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}; 